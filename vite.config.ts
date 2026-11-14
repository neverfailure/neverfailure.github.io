import path from 'path';
import type { Plugin } from 'vite';
import { defineConfig } from '@lark-apaas/coding-preset-vite-react';

const isStandalone = process.env.MIAODA_BUILD_TARGET === 'standalone';

function ghPagesOutputPlugin(): Plugin {
  return {
    name: 'gh-pages-output',
    apply: 'build',
    closeBundle() {
      if (!isStandalone) return;
      const fs = require('fs');
      const srcDir = path.resolve(__dirname, 'dist/client');
      const dstDir = path.resolve(__dirname, 'dist/gh-pages');
      const clientHtml = path.join(srcDir, 'client/index.html');
      if (!fs.existsSync(clientHtml)) return;
      if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });
      fs.copyFileSync(clientHtml, path.join(dstDir, 'index.html'));
      const assetsSrc = path.join(srcDir, 'assets');
      const assetsDst = path.join(dstDir, 'assets');
      if (fs.existsSync(assetsSrc)) {
        fs.cpSync(assetsSrc, assetsDst, { recursive: true });
      }
      const entries = fs.readdirSync(srcDir);
      for (const name of entries) {
        if (name === 'assets' || name === 'client' || name === 'server') continue;
        const full = path.join(srcDir, name);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) continue;
        fs.copyFileSync(full, path.join(dstDir, name));
      }
    },
  };
}

export default defineConfig({
  base: isStandalone ? '/' : undefined,
  plugins: [ghPagesOutputPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
});
