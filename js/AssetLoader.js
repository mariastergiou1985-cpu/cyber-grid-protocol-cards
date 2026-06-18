export const ASSET_MANIFEST = {
  combat_neon_city: './assets/backgrounds/combat_neon_city.png',
  combat_toxic_factory: './assets/backgrounds/combat_toxic_factory.png',
  map_data_vault: './assets/backgrounds/map_data_vault.png',
  shop_blacknet_market: './assets/backgrounds/shop_blacknet_market.png',

  card_neon_slash: './assets/cards/neon_slash.png',
  card_grid_guard: './assets/cards/grid_guard.png',
  card_protocol_spark: './assets/cards/protocol_spark.png',
  card_toxin_injection: './assets/cards/toxin_injection.png',
  card_overclock: './assets/cards/overclock.png',
  card_frost_strike: './assets/cards/frost_strike.png',
  card_shock_blade: './assets/cards/shock_blade.png',
  card_plasma_cut: './assets/cards/plasma_cut.png',

  char_skeleton_vanguard: './assets/characters/skeleton_vanguard.png',
  char_assassin_clone: './assets/characters/assassin_clone.png',
  char_cyber_arm_hero: './assets/characters/cyber_arm_hero.png',
  char_taekwondo_fighter: './assets/characters/taekwondo_fighter.png',
  char_oni_cataclysm: './assets/characters/oni_cataclysm.png',
  char_euclid_vector: './assets/characters/euclid_vector.png',
  char_brawler_warrior: './assets/characters/brawler_warrior.png',

  enemy_toxic_drone_hound: './assets/enemies/toxic_drone_hound.png',
  enemy_neon_cultist: './assets/enemies/neon_cultist.png',
  enemy_glitch_raven: './assets/enemies/glitch_raven.png',
  enemy_scrap_reaper: './assets/enemies/scrap_reaper.png',
  enemy_corrupted_sentinel: './assets/enemies/corrupted_sentinel.png'
};

export class AssetLoader {
  constructor(manifest, options = {}) {
    this.manifest = { ...manifest };
    this.images = new Map();
    this.missing = [];
    this.timeoutMs = options.timeoutMs ?? 12000;
    this.onProgress = options.onProgress ?? (() => {});
  }

  async loadAll() {
    const entries = Object.entries(this.manifest);
    let completed = 0;
    await Promise.all(entries.map(([key, src]) => this.loadImage(key, src).then(result => {
      completed += 1;
      this.onProgress({ completed, total: entries.length, key, src, ok: result.ok, reason: result.reason });
      return result;
    })));
    return this;
  }

  loadImage(key, src) {
    return new Promise(resolve => {
      const img = new Image();
      let settled = false;
      const finish = result => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(result);
      };
      const timer = setTimeout(() => {
        this.missing.push(`${key}: ${src} (timeout)`);
        console.warn(`[assets] timeout: ${key} ${src}`);
        finish({ key, src, ok: false, reason: 'timeout' });
      }, this.timeoutMs);
      img.onload = () => {
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          this.images.set(key, img);
          finish({ key, src, ok: true });
        } else {
          this.missing.push(`${key}: ${src} (zero-size image)`);
          console.warn(`[assets] zero-size: ${key} ${src}`);
          finish({ key, src, ok: false, reason: 'zero-size' });
        }
      };
      img.onerror = () => {
        this.missing.push(`${key}: ${src}`);
        console.warn(`[assets] missing: ${key} ${src}`);
        finish({ key, src, ok: false, reason: 'error' });
      };
      img.decoding = 'async';
      img.src = src;
    });
  }

  get(key) {
    const img = this.images.get(key);
    return img && img.complete && img.naturalWidth > 0 ? img : null;
  }

  has(key) {
    return Boolean(this.get(key));
  }
}
