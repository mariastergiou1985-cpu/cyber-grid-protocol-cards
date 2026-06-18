window.__CGPC_MODULE_STARTED__ = true;
window.CGPC_MODULE_STARTED = true;
window.CGPCBoot?.status('Loading JavaScript modules…');

import { AssetLoader, ASSET_MANIFEST } from './AssetLoader.js';
import { Game } from './Game.js';

function drawBootCanvas(canvas, text) {
  const ctx = canvas?.getContext?.('2d');
  if (!ctx) return;
  ctx.fillStyle = '#02060d';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const grad = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 50, canvas.width / 2, canvas.height / 2, canvas.width * .75);
  grad.addColorStop(0, 'rgba(84,248,255,.22)');
  grad.addColorStop(.45, 'rgba(255,77,240,.12)');
  grad.addColorStop(1, 'rgba(0,0,0,1)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#e8fdff';
  ctx.font = '950 48px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = '#54f8ff';
  ctx.shadowBlur = 25;
  ctx.fillText('CYBER-GRID: PROTOCOL CARDS', canvas.width / 2, canvas.height / 2 - 18);
  ctx.shadowBlur = 0;
  ctx.font = '800 20px system-ui';
  ctx.fillStyle = '#9ff';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 32);
}

async function boot() {
  const canvas = document.getElementById('game');
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Missing <canvas id="game"> in index.html.');
  }

  const totalAssets = Object.keys(ASSET_MANIFEST).length;
  window.CGPCBoot?.status(`Loading assets 0/${totalAssets}…`);
  drawBootCanvas(canvas, 'Loading assets…');

  const assets = await new AssetLoader(ASSET_MANIFEST, {
    onProgress({ completed, total, key, ok }) {
      const msg = `Loading assets ${completed}/${total}: ${key}${ok ? '' : ' — fallback'}`;
      window.CGPCBoot?.status(msg);
      if (completed === total || completed % 4 === 0) drawBootCanvas(canvas, msg);
    }
  }).loadAll();

  if (assets.missing.length > 0) {
    console.warn('[CGPC] Missing assets, fallbacks enabled:', assets.missing);
  }

  window.CGPCBoot?.status('Starting game…');
  const game = new Game(canvas, assets);
  window.CGPC_GAME = game;
  window.CGPC_BOOT_OK = true;
  window.CGPCBoot?.hide();
  game.start();
}

boot().catch(err => {
  console.error('[CGPC] boot failed', err);
  window.CGPCBoot?.error(err);
});
