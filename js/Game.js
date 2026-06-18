const W = 1600;
const H = 900;
const SAVE_KEY = 'cyber-grid-protocol-cards-run-v1';

const CARD_DB = {
  neon_slash: { title: 'Neon Slash', cost: 1, type: 'ATTACK', rarity: 'common', element: 'cyan', art: 'card_neon_slash', text: 'Deal 7 damage.', damage: 7 },
  grid_guard: { title: 'Grid Guard', cost: 1, type: 'SKILL', rarity: 'common', element: 'cyan', art: 'card_grid_guard', text: 'Gain 8 Block.', block: 8 },
  protocol_spark: { title: 'Protocol Spark', cost: 1, type: 'ATTACK', rarity: 'protocol', element: 'electric', art: 'card_protocol_spark', text: 'Deal 9 damage. Apply 1 Shock.', damage: 9, shock: 1 },
  toxin_injection: { title: 'Toxin Injection', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'toxin', art: 'card_toxin_injection', text: 'Deal 9 damage. Apply 2 Poison.', damage: 9, poison: 2 },
  overclock: { title: 'Overclock', cost: 1, type: 'POWER', rarity: 'rare', element: 'purple', art: 'card_overclock', text: 'Gain 1 Energy. Draw 1 card.', energy: 1, draw: 1 },
  frost_strike: { title: 'Frost Strike', cost: 1, type: 'ATTACK', rarity: 'common', element: 'frost', art: 'card_frost_strike', text: 'Deal 8 damage. Apply 2 Frost.', damage: 8, frost: 2 },
  shock_blade: { title: 'Shock Blade', cost: 1, type: 'ATTACK', rarity: 'common', element: 'electric', art: 'card_shock_blade', text: 'Deal 7 damage. Apply 2 Shock.', damage: 7, shock: 2 },
  plasma_cut: { title: 'Plasma Cut', cost: 2, type: 'ATTACK', rarity: 'uncommon', element: 'fire', art: 'card_plasma_cut', text: 'Deal 12 damage. Apply 2 Burn.', damage: 12, burn: 2 }
};

const CHARACTERS = [
  { id: 'skeleton_vanguard', name: 'Neon Skeleton Vanguard', hp: 75, art: 'char_skeleton_vanguard', color: '#54f8ff' },
  { id: 'assassin_clone', name: 'Assassin Clone', hp: 65, art: 'char_assassin_clone', color: '#ff4df0' },
  { id: 'cyber_arm_hero', name: 'Cyber Arm Hero', hp: 82, art: 'char_cyber_arm_hero', color: '#ff9f2f' },
  { id: 'taekwondo_fighter', name: 'Taekwondo Fighter', hp: 70, art: 'char_taekwondo_fighter', color: '#42f6ff' },
  { id: 'oni_cataclysm', name: 'Oni Cataclysm', hp: 92, art: 'char_oni_cataclysm', color: '#ff315e' },
  { id: 'euclid_vector', name: 'Euclid Vector', hp: 68, art: 'char_euclid_vector', color: '#8cff3f' },
  { id: 'brawler_warrior', name: 'Brawler Warrior', hp: 85, art: 'char_brawler_warrior', color: '#3fffc1' }
];

const ENEMIES = [
  { id: 'toxic_drone_hound', name: 'Toxic Drone Hound', hp: 38, art: 'enemy_toxic_drone_hound', intent: 'Bite', damage: 7, color: '#8cff3f' },
  { id: 'neon_cultist', name: 'Neon Cultist', hp: 42, art: 'enemy_neon_cultist', intent: 'Dark Bolt', damage: 8, color: '#ff4df0' },
  { id: 'glitch_raven', name: 'Glitch Raven', hp: 30, art: 'enemy_glitch_raven', intent: 'Glitch Peck', damage: 6, color: '#54f8ff' },
  { id: 'scrap_reaper', name: 'Scrap Reaper', hp: 46, art: 'enemy_scrap_reaper', intent: 'Scythe', damage: 10, color: '#ffd86a' },
  { id: 'corrupted_sentinel', name: 'Corrupted Sentinel', hp: 65, art: 'enemy_corrupted_sentinel', intent: 'Core Slam', damage: 13, color: '#b164ff' }
];

const MAP_NODES = ['battle', 'battle', 'shop', 'battle', 'rest', 'battle', 'elite', 'shop', 'battle', 'boss'];

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function copy(value) { return JSON.parse(JSON.stringify(value)); }
function choose(items) { return items[Math.floor(Math.random() * items.length)]; }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function roundRect(ctx, x, y, w, h, r = 16) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}
function drawCover(ctx, img, x, y, w, h) {
  if (!img) return false;
  const s = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * s;
  const dh = img.naturalHeight * s;
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  return true;
}
function drawContain(ctx, img, x, y, w, h) {
  if (!img) return null;
  const s = Math.min(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * s;
  const dh = img.naturalHeight * s;
  const dx = x + (w - dw) / 2;
  const dy = y + (h - dh) / 2;
  ctx.drawImage(img, dx, dy, dw, dh);
  return { x: dx, y: dy, w: dw, h: dh };
}
function drawFallbackBackground(ctx, label = 'CYBER GRID') {
  ctx.fillStyle = '#02060d';
  ctx.fillRect(0, 0, W, H);
  const grad = ctx.createRadialGradient(W * 0.5, H * 0.45, 60, W * 0.5, H * 0.45, W * 0.8);
  grad.addColorStop(0, 'rgba(84,248,255,.20)');
  grad.addColorStop(0.45, 'rgba(255,77,240,.10)');
  grad.addColorStop(1, 'rgba(2,6,13,1)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(84,248,255,.12)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 240, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 45) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.fillStyle = 'rgba(232,253,255,.25)';
  ctx.font = '900 46px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText(label, W / 2, H / 2);
}
function safeGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function safeSet(key, value) { try { localStorage.setItem(key, value); } catch (err) { console.warn('[save] write failed', err); } }

class Button {
  constructor(id, x, y, w, h, label, data = {}, color = '#54f8ff') { Object.assign(this, { id, x, y, w, h, label, data, color }); }
  contains(x, y) { return x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h; }
}

export class Game {
  constructor(canvas, assets) {
    if (!canvas) throw new Error('Game requires a canvas element.');
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) throw new Error('Could not create 2D canvas context.');
    this.assets = assets;
    this.state = 'menu';
    this.time = 0;
    this.lastTime = 0;
    this.mouse = { x: 0, y: 0 };
    this.buttons = [];
    this.cardRects = [];
    this.selectedCharacterIndex = 0;
    this.player = null;
    this.deck = [];
    this.drawPile = [];
    this.hand = [];
    this.discard = [];
    this.enemies = [];
    this.energy = 3;
    this.maxEnergy = 3;
    this.turn = 'player';
    this.node = 0;
    this.credits = 50;
    this.block = 0;
    this.message = '';
    this.fx = [];
    this.rewardCards = [];
    this.shopCards = [];
    this.hasSave = Boolean(safeGet(SAVE_KEY));
    this.bindEvents();
  }

  bindEvents() {
    const toCanvas = ev => {
      const rect = this.canvas.getBoundingClientRect();
      return {
        x: (ev.clientX - rect.left) * W / rect.width,
        y: (ev.clientY - rect.top) * H / rect.height
      };
    };
    this.canvas.addEventListener('pointermove', ev => { this.mouse = toCanvas(ev); });
    this.canvas.addEventListener('pointerdown', ev => {
      this.mouse = toCanvas(ev);
      this.handleClick(this.mouse.x, this.mouse.y);
    });
    window.addEventListener('keydown', ev => {
      if (ev.key === 'Enter' && this.state === 'combat') this.endTurn();
      if (ev.key === 'Escape' && this.state !== 'menu') this.state = 'menu';
    });
  }

  start() {
    this.draw();
    requestAnimationFrame(t => this.loop(t));
  }

  loop(t) {
    const dt = Math.min(0.033, (t - this.lastTime) / 1000 || 0);
    this.lastTime = t;
    this.time += dt;
    this.fx = this.fx.filter(f => (f.life -= dt) > 0).map(f => ({ ...f, y: f.y - dt * 28 }));
    this.draw();
    requestAnimationFrame(next => this.loop(next));
  }

  newRun() {
    const base = CHARACTERS[this.selectedCharacterIndex] ?? CHARACTERS[0];
    this.player = { ...copy(base), hp: base.hp, maxHp: base.hp, block: 0 };
    this.credits = 50;
    this.node = 0;
    this.maxEnergy = 3;
    this.deck = ['neon_slash', 'neon_slash', 'neon_slash', 'neon_slash', 'grid_guard', 'grid_guard', 'grid_guard', 'protocol_spark', 'frost_strike', 'shock_blade'];
    this.startCombat('battle');
    this.save();
  }

  save() {
    if (!this.player) return;
    safeSet(SAVE_KEY, JSON.stringify({ character: this.selectedCharacterIndex, hp: this.player.hp, maxHp: this.player.maxHp, deck: this.deck, node: this.node, credits: this.credits }));
    this.hasSave = true;
  }

  continueRun() {
    const raw = safeGet(SAVE_KEY);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      this.selectedCharacterIndex = data.character ?? 0;
      const base = CHARACTERS[this.selectedCharacterIndex] ?? CHARACTERS[0];
      this.player = { ...copy(base), hp: data.hp ?? base.hp, maxHp: data.maxHp ?? base.hp, block: 0 };
      this.deck = Array.isArray(data.deck) ? data.deck.filter(id => CARD_DB[id]) : ['neon_slash', 'grid_guard', 'protocol_spark'];
      this.node = data.node ?? 0;
      this.credits = data.credits ?? 50;
      this.state = 'map';
    } catch (err) {
      console.warn('[save] invalid save', err);
      this.newRun();
    }
  }

  startCombat(kind = 'battle') {
    const count = kind === 'boss' ? 1 : kind === 'elite' ? 2 : 1 + (this.node % 3 === 0 ? 1 : 0);
    const pool = kind === 'boss' ? [ENEMIES[4]] : kind === 'elite' ? ENEMIES.slice(2, 5) : ENEMIES.slice(0, 4);
    this.enemies = Array.from({ length: count }, (_, i) => {
      const tpl = copy(pool[(this.node + i) % pool.length]);
      const bonus = kind === 'boss' ? 55 : kind === 'elite' ? 18 : 0;
      tpl.maxHp = tpl.hp + bonus;
      tpl.hp = tpl.maxHp;
      tpl.status = {};
      return tpl;
    });
    this.drawPile = shuffle(this.deck);
    this.discard = [];
    this.hand = [];
    this.energy = this.maxEnergy;
    this.block = 0;
    this.turn = 'player';
    this.message = kind === 'boss' ? 'Boss protocol detected.' : 'Combat initialized.';
    this.drawCards(5);
    this.state = 'combat';
  }

  drawCards(n) {
    for (let i = 0; i < n; i++) {
      if (!this.drawPile.length && this.discard.length) {
        this.drawPile = shuffle(this.discard);
        this.discard = [];
      }
      if (this.drawPile.length) this.hand.push(this.drawPile.shift());
    }
  }

  playCard(index) {
    if (this.state !== 'combat' || this.turn !== 'player') return;
    const id = this.hand[index];
    const card = CARD_DB[id];
    if (!card || this.energy < card.cost) return;
    this.energy -= card.cost;
    this.hand.splice(index, 1);
    this.discard.push(id);
    if (card.block) {
      this.block += card.block;
      this.floatText(295, 650, `+${card.block} BLOCK`, '#54f8ff');
    }
    if (card.energy) {
      this.energy += card.energy;
      this.floatText(300, 715, '+1 ENERGY', '#ffd86a');
    }
    if (card.draw) this.drawCards(card.draw);
    if (card.damage) {
      const target = this.enemies.find(e => e.hp > 0);
      if (target) {
        let dmg = card.damage;
        if (target.status?.Shock) dmg += target.status.Shock;
        target.hp -= dmg;
        this.floatText(1040, 370, `-${dmg}`, '#ff4767');
        this.fx.push({ x: 1060, y: 430, life: .35, color: card.element === 'toxin' ? '#8cff3f' : card.element === 'frost' ? '#80dfff' : card.element === 'electric' ? '#ffe14a' : '#ff4df0', kind: 'burst' });
        this.applyStatus(target, card);
      }
    }
    if (this.enemies.every(e => e.hp <= 0)) this.winCombat();
  }

  applyStatus(enemy, card) {
    enemy.status = enemy.status || {};
    const apply = (name, amount) => {
      if (!amount) return;
      enemy.status[name] = (enemy.status[name] || 0) + amount;
      this.floatText(1090, 500, `${name} +${amount}`, this.statusColor(name));
    };
    apply('Poison', card.poison);
    apply('Shock', card.shock);
    apply('Frost', card.frost);
    apply('Burn', card.burn);
  }

  endTurn() {
    if (this.state !== 'combat' || this.turn !== 'player') return;
    this.turn = 'enemy';
    let total = 0;
    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      if (e.status?.Poison) { e.hp -= e.status.Poison; this.floatText(1050, 445, `Poison -${e.status.Poison}`, '#8cff3f'); }
      if (e.status?.Burn) { e.hp -= e.status.Burn; this.floatText(1050, 475, `Burn -${e.status.Burn}`, '#ff7740'); }
      if (e.hp <= 0) continue;
      const frozen = e.status?.Frost > 0;
      if (frozen) { e.status.Frost -= 1; this.floatText(1050, 505, 'FROZEN', '#80dfff'); continue; }
      total += e.damage;
    }
    const absorbed = Math.min(this.block, total);
    const hpLoss = total - absorbed;
    this.block -= absorbed;
    this.player.hp -= hpLoss;
    if (total > 0) this.floatText(270, 455, hpLoss ? `-${hpLoss} HP` : 'BLOCKED', hpLoss ? '#ff4767' : '#54f8ff');
    if (this.player.hp <= 0) { this.state = 'gameover'; return; }
    if (this.enemies.every(e => e.hp <= 0)) { this.winCombat(); return; }
    this.hand.forEach(id => this.discard.push(id));
    this.hand = [];
    this.energy = this.maxEnergy;
    this.block = 0;
    this.turn = 'player';
    this.drawCards(5);
    this.save();
  }

  winCombat() {
    this.credits += 25 + this.node * 3;
    this.rewardCards = shuffle(Object.keys(CARD_DB)).slice(0, 3);
    this.state = 'reward';
    this.save();
  }

  takeReward(id) {
    if (id && CARD_DB[id]) this.deck.push(id);
    this.node += 1;
    if (this.node >= MAP_NODES.length) this.state = 'victory';
    else this.state = 'map';
    this.save();
  }

  enterNode() {
    const type = MAP_NODES[this.node] || 'battle';
    if (type === 'shop') this.openShop();
    else if (type === 'rest') this.state = 'rest';
    else this.startCombat(type);
  }

  openShop() {
    this.shopCards = shuffle(Object.keys(CARD_DB)).slice(0, 5).map((id, i) => ({ id, price: [90, 95, 120, 110, 140][i] ?? 100, sold: false }));
    this.state = 'shop';
  }

  buyCard(slot) {
    if (slot.sold || this.credits < slot.price) return;
    this.credits -= slot.price;
    this.deck.push(slot.id);
    slot.sold = true;
    this.floatText(800, 780, 'CARD ADDED', '#ffd86a');
    this.save();
  }

  healRest() {
    this.player.hp = clamp(this.player.hp + Math.ceil(this.player.maxHp * .3), 1, this.player.maxHp);
    this.node += 1;
    this.state = this.node >= MAP_NODES.length ? 'victory' : 'map';
    this.save();
  }

  floatText(x, y, text, color) {
    this.fx.push({ x, y, text, color, life: 1, kind: 'text' });
  }

  statusColor(name) {
    return { Poison: '#8cff3f', Shock: '#ffe14a', Frost: '#80dfff', Burn: '#ff7740' }[name] || '#fff';
  }

  handleClick(x, y) {
    for (const button of this.buttons) {
      if (!button.contains(x, y)) continue;
      switch (button.id) {
        case 'newRun': this.newRun(); return;
        case 'continue': this.continueRun(); return;
        case 'gallery': this.state = 'gallery'; return;
        case 'menu': this.state = 'menu'; return;
        case 'endTurn': this.endTurn(); return;
        case 'reward': this.takeReward(button.data.id); return;
        case 'skipReward': this.takeReward(null); return;
        case 'node': this.enterNode(); return;
        case 'shopCard': this.buyCard(button.data.slot); return;
        case 'leaveShop': this.node += 1; this.state = this.node >= MAP_NODES.length ? 'victory' : 'map'; this.save(); return;
        case 'restHeal': this.healRest(); return;
        case 'restUpgrade': this.deck.push('plasma_cut'); this.node += 1; this.state = this.node >= MAP_NODES.length ? 'victory' : 'map'; this.save(); return;
        case 'selectCharacter': this.selectedCharacterIndex = button.data.index; this.newRun(); return;
        default: return;
      }
    }
    if (this.state === 'combat') {
      for (let i = this.cardRects.length - 1; i >= 0; i--) {
        const r = this.cardRects[i];
        if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) { this.playCard(r.index); return; }
      }
    }
  }

  draw() {
    const ctx = this.ctx;
    this.buttons = [];
    this.cardRects = [];
    ctx.clearRect(0, 0, W, H);
    if (this.state === 'menu') this.drawMenu(ctx);
    else if (this.state === 'gallery') this.drawGallery(ctx);
    else if (this.state === 'combat') this.drawCombat(ctx);
    else if (this.state === 'reward') this.drawReward(ctx);
    else if (this.state === 'map') this.drawMap(ctx);
    else if (this.state === 'shop') this.drawShop(ctx);
    else if (this.state === 'rest') this.drawRest(ctx);
    else if (this.state === 'victory') this.drawEnd(ctx, 'PROTOCOL CLEARED', '#ffd86a');
    else if (this.state === 'gameover') this.drawEnd(ctx, 'RUN TERMINATED', '#ff4767');
    this.drawEffects(ctx);
  }

  drawBackground(ctx, key, label) {
    const img = this.assets.get(key);
    if (!drawCover(ctx, img, 0, 0, W, H)) drawFallbackBackground(ctx, label);
    const top = ctx.createLinearGradient(0, 0, 0, H);
    top.addColorStop(0, 'rgba(0,0,0,.45)');
    top.addColorStop(.6, 'rgba(0,0,0,.10)');
    top.addColorStop(1, 'rgba(0,0,0,.62)');
    ctx.fillStyle = top;
    ctx.fillRect(0, 0, W, H);
  }

  panel(ctx, x, y, w, h, color = '#54f8ff', alpha = .64) {
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = 18;
    roundRect(ctx, x, y, w, h, 18);
    ctx.fillStyle = `rgba(3,9,18,${alpha})`;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  button(ctx, id, x, y, w, h, label, color = '#54f8ff', data = {}) {
    const hot = this.mouse.x >= x && this.mouse.x <= x + w && this.mouse.y >= y && this.mouse.y <= y + h;
    this.buttons.push(new Button(id, x, y, w, h, label, data, color));
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = hot ? 26 : 12;
    roundRect(ctx, x, y, w, h, 18);
    ctx.fillStyle = hot ? 'rgba(10,35,55,.92)' : 'rgba(2,9,18,.78)';
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = hot ? 3 : 1.5;
    ctx.stroke();
    ctx.fillStyle = '#f6ffff';
    ctx.font = '900 23px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const lines = String(label).split('\n');
    lines.forEach((line, i) => ctx.fillText(line, x + w / 2, y + h / 2 + (i - (lines.length - 1) / 2) * 24));
    ctx.restore();
  }

  drawMenu(ctx) {
    this.drawBackground(ctx, 'combat_neon_city', 'MAIN MENU');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#e8fdff';
    ctx.font = '950 78px Georgia, serif';
    ctx.shadowColor = '#54f8ff';
    ctx.shadowBlur = 36;
    ctx.fillText('CYBER-GRID', W / 2, 170);
    ctx.fillStyle = '#ffd86a';
    ctx.font = '950 42px system-ui';
    ctx.fillText('PROTOCOL CARDS', W / 2, 222);
    ctx.shadowBlur = 0;
    this.panel(ctx, 550, 280, 500, 355, '#54f8ff', .70);
    this.button(ctx, 'newRun', 625, 325, 350, 68, 'NEW RUN', '#54f8ff');
    this.button(ctx, 'continue', 625, 415, 350, 68, this.hasSave ? 'CONTINUE RUN' : 'CONTINUE LOCKED', this.hasSave ? '#ffd86a' : '#555');
    this.button(ctx, 'gallery', 625, 505, 350, 68, 'CHARACTER GALLERY', '#ff4df0');
    ctx.fillStyle = 'rgba(232,253,255,.72)';
    ctx.font = '800 18px system-ui';
    ctx.fillText('GitHub Pages / localhost ready browser build', W / 2, 710);
    ctx.fillStyle = 'rgba(84,248,255,.92)';
    ctx.fillText('InkSpireM Visuals', W / 2, 754);
  }

  drawGallery(ctx) {
    this.drawBackground(ctx, 'combat_toxic_factory', 'CHARACTERS');
    this.drawTopHud(ctx, true);
    ctx.fillStyle = '#e8fdff';
    ctx.font = '950 48px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('SELECT A PROTOCOL HERO', W / 2, 125);
    CHARACTERS.forEach((ch, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const x = 130 + col * 360;
      const y = 170 + row * 310;
      this.panel(ctx, x, y, 290, 260, ch.color, .56);
      const img = this.assets.get(ch.art);
      if (img) drawContain(ctx, img, x + 30, y + 18, 230, 185);
      ctx.fillStyle = ch.color;
      ctx.font = '900 19px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(ch.name, x + 145, y + 228, 260);
      this.buttons.push(new Button('selectCharacter', x, y, 290, 260, ch.name, { index: i }, ch.color));
    });
    this.button(ctx, 'menu', 1320, 810, 220, 58, 'BACK', '#54f8ff');
  }

  drawTopHud(ctx, simple = false) {
    this.panel(ctx, 30, 24, 1540, 66, '#54f8ff', .62);
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.font = '900 22px system-ui';
    ctx.fillStyle = '#e8fdff';
    const name = this.player?.name || CHARACTERS[this.selectedCharacterIndex]?.name || 'Neon Skeleton Vanguard';
    ctx.fillText(name, 55, 57);
    if (!simple && this.player) {
      this.hpBar(ctx, 360, 44, 230, 22, this.player.hp, this.player.maxHp, '#ff4767', false);
      ctx.fillStyle = '#ffd86a';
      ctx.fillText(`◈ ${this.credits} credits`, 650, 57);
      ctx.fillStyle = '#9ff';
      ctx.fillText(`Node ${Math.min(this.node + 1, MAP_NODES.length)}/${MAP_NODES.length}`, 835, 57);
      ctx.fillStyle = '#ff4df0';
      ctx.fillText(`Deck ${this.deck.length}`, 1010, 57);
    }
  }

  drawCombat(ctx) {
    this.drawBackground(ctx, this.node % 2 ? 'combat_toxic_factory' : 'combat_neon_city', 'COMBAT');
    this.drawTopHud(ctx);
    this.drawPlayer(ctx);
    this.drawEnemies(ctx);
    this.drawCombatUi(ctx);
  }

  drawPlayer(ctx) {
    const ch = this.player ?? CHARACTERS[this.selectedCharacterIndex];
    const img = this.assets.get(ch.art);
    const bob = Math.sin(this.time * 2.0) * 5;
    this.shadow(ctx, 270, 705, 280, 52, ch.color);
    if (img) {
      ctx.save();
      ctx.shadowColor = ch.color;
      ctx.shadowBlur = 22;
      drawContain(ctx, img, 80, 178 + bob, 430, 535);
      ctx.restore();
    } else {
      this.fallbackUnit(ctx, 270, 480 + bob, ch.color, 'HERO');
    }
    this.hpBar(ctx, 160, 715, 260, 22, this.player.hp, this.player.maxHp, '#ff4767');
    if (this.block > 0) this.badge(ctx, 452, 717, this.block, '#54f8ff');
  }

  drawEnemies(ctx) {
    const alive = this.enemies.filter(e => e.hp > 0);
    alive.forEach((e, i) => {
      const x = alive.length === 1 ? 1060 : 845 + i * 265;
      const y = i % 2 ? 207 : 230;
      const img = this.assets.get(e.art);
      this.shadow(ctx, x, 705, 220, 44, e.color);
      ctx.fillStyle = '#fff';
      ctx.font = '900 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(e.name, x, 170);
      this.panel(ctx, x - 96, 183, 192, 58, e.color, .70);
      ctx.fillStyle = e.color;
      ctx.font = '900 16px system-ui';
      ctx.fillText(`Intent: ${e.intent} ${e.damage}`, x, 218);
      if (img) {
        ctx.save();
        ctx.shadowColor = e.color;
        ctx.shadowBlur = 18;
        drawContain(ctx, img, x - 150, y, 300, 390);
        ctx.restore();
      } else {
        this.fallbackUnit(ctx, x, 475, e.color, 'ENEMY');
      }
      this.hpBar(ctx, x - 125, 715, 250, 20, e.hp, e.maxHp, '#ff4767');
      this.drawStatuses(ctx, e, x, 765);
    });
  }

  drawCombatUi(ctx) {
    this.panel(ctx, 30, 762, 1540, 116, '#54f8ff', .55);
    this.energyOrb(ctx, 92, 821);
    this.pile(ctx, 170, 785, 'DRAW', this.drawPile.length, '#54f8ff');
    this.pile(ctx, 1360, 785, 'DISCARD', this.discard.length, '#ff4df0');
    this.button(ctx, 'endTurn', 1465, 792, 90, 74, 'END\nTURN', '#ffd86a');
    const cardW = 164;
    const cardH = 205;
    const gap = 15;
    const total = this.hand.length * cardW + Math.max(0, this.hand.length - 1) * gap;
    const start = W / 2 - total / 2;
    this.hand.forEach((id, i) => {
      const x = start + i * (cardW + gap);
      const yBase = 672;
      const hot = this.mouse.x >= x && this.mouse.x <= x + cardW && this.mouse.y >= yBase - 30 && this.mouse.y <= yBase + cardH;
      const y = hot ? yBase - 26 : yBase;
      this.drawCard(ctx, id, x, y, cardW, cardH, this.energy >= (CARD_DB[id]?.cost ?? 99), hot);
      this.cardRects.push({ index: i, x, y, w: cardW, h: cardH });
    });
  }

  drawCard(ctx, id, x, y, w, h, playable = true, hot = false) {
    const card = CARD_DB[id];
    if (!card) return;
    const accent = this.cardColor(card);
    ctx.save();
    ctx.globalAlpha = playable ? 1 : .48;
    ctx.shadowColor = accent;
    ctx.shadowBlur = hot ? 26 : 9;
    roundRect(ctx, x, y, w, h, 12);
    ctx.fillStyle = 'rgba(2,7,13,.94)';
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = hot ? 3 : 1.7;
    ctx.stroke();
    const img = this.assets.get(card.art);
    if (img) {
      ctx.save();
      roundRect(ctx, x + 8, y + 36, w - 16, 92, 8);
      ctx.clip();
      drawCover(ctx, img, x + 8, y + 36, w - 16, 92);
      ctx.restore();
    } else {
      ctx.fillStyle = 'rgba(84,248,255,.12)';
      roundRect(ctx, x + 8, y + 36, w - 16, 92, 8);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    roundRect(ctx, x + 8, y + 8, 38, 38, 19);
    ctx.fillStyle = 'rgba(0,21,38,.96)';
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = '950 24px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(card.cost, x + 27, y + 27);
    ctx.font = '950 14px Georgia';
    ctx.fillText(card.title, x + w / 2 + 12, y + 24, w - 62);
    roundRect(ctx, x + 34, y + 130, w - 68, 23, 7);
    ctx.fillStyle = 'rgba(0,0,0,.78)';
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.stroke();
    ctx.fillStyle = accent;
    ctx.font = '950 12px system-ui';
    ctx.fillText(card.type, x + w / 2, y + 142);
    ctx.fillStyle = '#f7ffff';
    ctx.font = '800 13px system-ui';
    this.wrapText(ctx, card.text, x + w / 2, y + 169, w - 20, 17, 3);
    ctx.restore();
  }

  drawReward(ctx) {
    this.drawBackground(ctx, 'combat_neon_city', 'REWARD');
    this.drawTopHud(ctx);
    ctx.fillStyle = '#ffd86a';
    ctx.font = '950 44px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('CHOOSE A PROTOCOL CARD', W / 2, 155);
    this.rewardCards.forEach((id, i) => {
      const x = 430 + i * 260;
      const hot = this.mouse.x >= x && this.mouse.x <= x + 220 && this.mouse.y >= 260 && this.mouse.y <= 560;
      this.drawCard(ctx, id, x, hot ? 238 : 260, 220, 300, true, hot);
      this.buttons.push(new Button('reward', x, 240, 220, 330, id, { id }, this.cardColor(CARD_DB[id])));
    });
    this.button(ctx, 'skipReward', 680, 650, 240, 62, 'SKIP', '#ff4df0');
  }

  drawMap(ctx) {
    this.drawBackground(ctx, 'map_data_vault', 'MAP');
    this.drawTopHud(ctx);
    ctx.fillStyle = '#e8fdff';
    ctx.font = '950 38px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('SECTOR 7 // DATA-VAULT ROUTE', 58, 136);
    const pts = MAP_NODES.map((type, i) => ({ type, x: 185 + i * 137, y: 575 - Math.sin(i * .85) * 170 - (i % 2) * 45 }));
    ctx.save();
    ctx.strokeStyle = 'rgba(84,248,255,.60)';
    ctx.lineWidth = 5;
    ctx.shadowColor = '#54f8ff';
    ctx.shadowBlur = 18;
    ctx.beginPath();
    pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
    ctx.stroke();
    ctx.restore();
    pts.forEach((p, i) => this.drawNode(ctx, p, i));
    this.button(ctx, 'menu', 1330, 812, 210, 54, 'MENU', '#54f8ff');
  }

  drawNode(ctx, p, i) {
    const color = p.type === 'boss' ? '#ff315e' : p.type === 'shop' ? '#ffd86a' : p.type === 'rest' ? '#8cff3f' : p.type === 'elite' ? '#ff4df0' : '#54f8ff';
    const active = i === this.node;
    const done = i < this.node;
    const icon = { battle: '⚔', elite: '☠', rest: '✚', shop: '◈', event: '?', boss: '☢' }[p.type] || '?';
    ctx.save();
    ctx.globalAlpha = done ? .38 : 1;
    ctx.shadowColor = color;
    ctx.shadowBlur = active ? 28 : 12;
    roundRect(ctx, p.x - 48, p.y - 48, 96, 96, 22);
    ctx.fillStyle = 'rgba(3,8,18,.88)';
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = active ? 4 : 2;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.font = '950 34px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(icon, p.x, p.y - 2);
    ctx.fillStyle = '#fff';
    ctx.font = '950 13px system-ui';
    ctx.fillText(p.type.toUpperCase(), p.x, p.y + 68);
    ctx.restore();
    if (active) this.buttons.push(new Button('node', p.x - 60, p.y - 60, 120, 135, p.type, {}, color));
  }

  drawShop(ctx) {
    this.drawBackground(ctx, 'shop_blacknet_market', 'SHOP');
    ctx.fillStyle = '#ff4df0';
    ctx.font = '950 46px system-ui';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#ff4df0';
    ctx.shadowBlur = 22;
    ctx.fillText('BLACKNET MARKET', W / 2, 86);
    ctx.shadowBlur = 0;
    this.panel(ctx, 44, 30, 260, 64, '#ffd86a', .7);
    ctx.fillStyle = '#ffd86a';
    ctx.font = '950 24px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(`${this.credits} CREDITS`, 174, 68);
    this.shopCards.forEach((slot, i) => {
      const x = 275 + i * 210;
      const y = 165;
      this.drawCard(ctx, slot.id, x, y, 170, 230, !slot.sold, false);
      ctx.fillStyle = slot.sold ? '#8a8a8a' : '#ffd86a';
      ctx.font = '950 22px system-ui';
      ctx.fillText(slot.sold ? 'SOLD' : `◈ ${slot.price}`, x + 85, y + 264);
      if (!slot.sold) this.buttons.push(new Button('shopCard', x, y, 170, 270, slot.id, { slot }, '#ffd86a'));
    });
    this.panel(ctx, 170, 540, 1240, 240, '#54f8ff', .65);
    const items = [
      ['Neural Shard', 'Relic', 'Gain 1 Energy next run', 180],
      ['Void Lens', 'Relic', 'Draw 1 at combat start', 160],
      ['Nano Repair', 'Utility', 'Heal 20 HP', 80],
      ['System Purge', 'Utility', 'Remove bad status', 70],
      ['Remove Card', 'Service', 'Remove a card from deck', 75]
    ];
    items.forEach((it, i) => {
      const x = 215 + i * 230;
      this.panel(ctx, x, 590, 185, 140, i < 2 ? '#b164ff' : '#54f8ff', .58);
      ctx.fillStyle = '#fff';
      ctx.font = '950 17px system-ui';
      ctx.fillText(it[0], x + 92, 625, 160);
      ctx.fillStyle = '#aefcff';
      ctx.font = '800 14px system-ui';
      ctx.fillText(it[2], x + 92, 666, 160);
      ctx.fillStyle = '#ffd86a';
      ctx.font = '950 18px system-ui';
      ctx.fillText(`◈ ${it[3]}`, x + 92, 708);
    });
    this.button(ctx, 'leaveShop', 680, 814, 240, 56, 'LEAVE SHOP', '#54f8ff');
  }

  drawRest(ctx) {
    this.drawBackground(ctx, 'combat_toxic_factory', 'REST');
    this.drawTopHud(ctx);
    ctx.fillStyle = '#54f8ff';
    ctx.font = '950 52px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('CYBER REPAIR STATION', W / 2, 180);
    this.panel(ctx, 450, 275, 700, 360, '#54f8ff', .65);
    this.button(ctx, 'restHeal', 540, 380, 240, 90, 'HEAL 30%', '#8cff3f');
    this.button(ctx, 'restUpgrade', 820, 380, 240, 90, 'TUNE DECK', '#ffd86a');
  }

  drawEnd(ctx, title, color) {
    this.drawBackground(ctx, 'combat_neon_city', title);
    ctx.fillStyle = color;
    ctx.font = '950 74px Georgia';
    ctx.textAlign = 'center';
    ctx.shadowColor = color;
    ctx.shadowBlur = 30;
    ctx.fillText(title, W / 2, 360);
    ctx.shadowBlur = 0;
    this.button(ctx, 'menu', 680, 470, 240, 70, 'MAIN MENU', '#54f8ff');
  }

  cardColor(card) {
    if (!card) return '#54f8ff';
    if (card.element === 'toxin') return '#8cff3f';
    if (card.element === 'fire') return '#ff4b35';
    if (card.element === 'frost') return '#80dfff';
    if (card.element === 'electric') return '#ffe14a';
    if (card.element === 'purple') return '#b164ff';
    if (card.rarity === 'protocol') return '#ffd86a';
    return '#54f8ff';
  }

  hpBar(ctx, x, y, w, h, hp, maxHp, color, label = true) {
    roundRect(ctx, x, y, w, h, h / 2);
    ctx.fillStyle = 'rgba(0,0,0,.78)';
    ctx.fill();
    roundRect(ctx, x, y, Math.max(4, w * clamp(hp / maxHp, 0, 1)), h, h / 2);
    const g = ctx.createLinearGradient(x, y, x + w, y);
    g.addColorStop(0, color);
    g.addColorStop(1, '#ffd86a');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.32)';
    ctx.stroke();
    if (label) {
      ctx.fillStyle = '#fff';
      ctx.font = '950 15px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(`${Math.max(0, Math.ceil(hp))}/${maxHp}`, x + w / 2, y + h + 7);
    }
  }

  shadow(ctx, x, y, w, h, color) {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.58)';
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  badge(ctx, x, y, value, color) {
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = 18;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#04121c';
    ctx.font = '950 20px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(value, x, y);
    ctx.restore();
  }

  pile(ctx, x, y, label, n, color) {
    this.panel(ctx, x, y, 110, 84, color, .62);
    ctx.fillStyle = '#fff';
    ctx.font = '950 15px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x + 55, y + 25);
    ctx.font = '950 28px system-ui';
    ctx.fillText(n, x + 55, y + 58);
  }

  energyOrb(ctx, x, y) {
    ctx.save();
    ctx.shadowColor = '#54f8ff';
    ctx.shadowBlur = 24;
    ctx.fillStyle = 'rgba(0,45,70,.96)';
    ctx.beginPath();
    ctx.arc(x, y, 55, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#54f8ff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = '950 34px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${this.energy}/${this.maxEnergy}`, x, y - 5);
    ctx.font = '950 13px system-ui';
    ctx.fillText('ENERGY', x, y + 36);
    ctx.restore();
  }

  drawStatuses(ctx, enemy, x, y) {
    const entries = Object.entries(enemy.status || {}).filter(([, v]) => v > 0);
    entries.forEach(([name, value], i) => {
      ctx.fillStyle = this.statusColor(name);
      ctx.font = '950 15px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(`${name} ${value}`, x + (i - (entries.length - 1) / 2) * 78, y);
    });
  }

  fallbackUnit(ctx, x, y, color, label) {
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = 25;
    ctx.fillStyle = 'rgba(2,9,18,.8)';
    ctx.beginPath();
    ctx.arc(x, y - 90, 54, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.font = '950 22px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y + 40);
    ctx.restore();
  }

  drawEffects(ctx) {
    for (const f of this.fx) {
      const alpha = clamp(f.life, 0, 1);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.shadowColor = f.color;
      ctx.shadowBlur = 20;
      if (f.kind === 'burst') {
        ctx.strokeStyle = f.color;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(f.x, f.y, 70 * (1 - alpha), 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.fillStyle = f.color;
        ctx.font = '950 24px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(f.text, f.x, f.y);
      }
      ctx.restore();
    }
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = '';
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    lines.slice(0, maxLines).forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  }
}
