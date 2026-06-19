const W = 1600;
const H = 900;
const SAVE_KEY = 'cyber-grid-protocol-cards-run-v1';
const RADIOACTIVE_CLONE_ASSASSIN_ID = 'radioactive_clone_assassin';
const BRAWLER_WARRIOR_ID = 'brawler_warrior';
const TAEKWONDO_FIGHTER_ID = 'taekwondo_fighter';
const SKELETON_VANGUARD_ID = 'skeleton_vanguard';
const CYBER_ARM_HERO_ID = 'cyber_arm_hero';

const CARD_DB = {
  // Core starter cards
  neon_slash: { title: 'Neon Slash', cost: 1, type: 'ATTACK', rarity: 'common', element: 'cyan', elementTags: ['physical'], art: 'card_neon_slash', text: 'Deal 7 damage. Apply 1 Vulnerable.', damage: 7, vulnerable: 1 },
  grid_guard: { title: 'Grid Guard', cost: 1, type: 'SKILL', rarity: 'common', element: 'cyan', elementTags: ['shield'], art: 'card_grid_guard', text: 'Gain 8 Block.', block: 8 },
  protocol_spark: { title: 'Protocol Spark', cost: 1, type: 'ATTACK', rarity: 'protocol', element: 'electric', elementTags: ['electric'], art: 'card_protocol_spark', text: 'Deal 9 damage. Apply 1 Shock.', damage: 9, shock: 1 },
  overclock: { title: 'Overclock', cost: 1, type: 'POWER', rarity: 'rare', element: 'purple', elementTags: ['electric'], art: 'card_overclock', text: 'Gain 1 Energy. Draw 1 card. Add 1 Overclock.', energy: 1, draw: 1, power: 'Overclock', powerAmount: 1 },

  // Element attack cards
  frost_strike: { title: 'Frost Strike', cost: 1, type: 'ATTACK', rarity: 'common', element: 'frost', elementTags: ['frost'], art: 'card_frost_strike', text: 'Deal 8 damage. Apply 2 Frost.', damage: 8, frost: 2 },
  shock_blade: { title: 'Shock Blade', cost: 1, type: 'ATTACK', rarity: 'common', element: 'electric', elementTags: ['electric'], art: 'card_shock_blade', text: 'Deal 7 damage. Apply 2 Shock.', damage: 7, shock: 2 },
  plasma_cut: { title: 'Plasma Cut', cost: 2, type: 'ATTACK', rarity: 'uncommon', element: 'fire', elementTags: ['fire'], art: 'card_plasma_cut', text: 'Deal 12 damage. Apply 2 Burn.', damage: 12, burn: 2 },
  toxin_injection: { title: 'Toxin Injection', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'toxin', elementTags: ['toxin'], art: 'card_toxin_injection', text: 'Deal 9 damage. Apply 2 Poison.', damage: 9, poison: 2 },
  water_pulse: { title: 'Water Pulse', cost: 1, type: 'SKILL', rarity: 'common', element: 'water', elementTags: ['water'], art: 'card_grid_guard', text: 'Gain 5 Block. Apply 2 Soaked.', block: 5, soaked: 2 },
  rad_lance: { title: 'Rad Lance', cost: 1, type: 'ATTACK', rarity: 'uncommon', element: 'radiation', elementTags: ['radiation'], art: 'card_protocol_spark', text: 'Deal 6 damage. Apply 2 Rad Mark.', damage: 6, rad: 2 },
  corrosive_needle: { title: 'Corrosive Needle', cost: 1, type: 'ATTACK', rarity: 'common', element: 'toxin', elementTags: ['toxin'], art: 'card_toxin_injection', text: 'Deal 5 damage. Apply 3 Poison.', damage: 5, poison: 3 },
  cryo_guard: { title: 'Cryo Guard', cost: 1, type: 'SKILL', rarity: 'common', element: 'frost', elementTags: ['frost'], art: 'card_grid_guard', text: 'Gain 7 Block. Apply 1 Frost.', block: 7, frost: 1 },
  voltage_step: { title: 'Voltage Step', cost: 0, type: 'SKILL', rarity: 'uncommon', element: 'electric', elementTags: ['electric'], art: 'card_overclock', text: 'Draw 1. Apply 1 Shock.', draw: 1, shock: 1 },
  flame_barrier: { title: 'Flame Barrier', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'fire', elementTags: ['fire'], art: 'card_grid_guard', text: 'Gain 6 Block. Apply 2 Burn.', block: 6, burn: 2 },
  toxic_screen: { title: 'Toxic Screen', cost: 1, type: 'SKILL', rarity: 'common', element: 'toxin', elementTags: ['toxin'], art: 'card_toxin_injection', text: 'Gain 6 Block. Apply 1 Poison to all.', block: 6, poison: 1, target: 'all' },
  ion_pierce: { title: 'Ion Pierce', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'electric', elementTags: ['electric', 'radiation'], art: 'card_shock_blade', text: 'Deal 14 damage. Apply 1 Shock and 1 Rad Mark.', damage: 14, shock: 1, rad: 1 },

  // Radioactive Clone Assassin character cards
  radioactive_strike: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Radioactive Strike', cost: 1, type: 'ATTACK', rarity: 'common', element: 'radiation', elementTags: ['radiation', 'clone'], art: 'card_radioactive_strike', text: 'Deal 7 damage. Apply 1 Rad Mark.', damage: 7, rad: 1 },
  twin_clone: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Twin Clone', cost: 1, type: 'ATTACK', rarity: 'common', element: 'cyan', elementTags: ['physical', 'clone'], art: 'card_twin_clone', text: 'Deal 4 damage twice.', damage: 4, hits: 2 },
  nuclear_blade: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Nuclear Blade', cost: 1, type: 'ATTACK', rarity: 'uncommon', element: 'radiation', elementTags: ['radiation', 'clone'], art: 'card_nuclear_blade', text: 'Deal 9 damage. Apply 1 Vulnerable.', damage: 9, vulnerable: 1 },
  critical_mass: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Critical Mass', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'radiation', elementTags: ['radiation', 'fire', 'clone'], art: 'card_critical_mass', text: 'Deal 13 damage. Apply 2 Rad Mark.', damage: 13, rad: 2 },
  isotope_purge: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Isotope Purge', cost: 1, type: 'ATTACK', rarity: 'uncommon', element: 'radiation', elementTags: ['radiation', 'clone'], art: 'card_isotope_purge', text: 'Deal 6 damage. Apply 1 Weak.', damage: 6, weak: 1 },
  chain_reaction: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Chain Reaction', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'radiation', elementTags: ['radiation', 'electric', 'clone'], art: 'card_chain_reaction', text: 'Deal 8 to ALL. Apply 1 Rad Mark.', damage: 8, target: 'all', rad: 1 },
  unstable_strike: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Unstable Strike', cost: 0, type: 'ATTACK', rarity: 'uncommon', element: 'radiation', elementTags: ['radiation', 'clone'], art: 'card_unstable_strike', text: 'Lose 2 HP. Deal 6 damage.', selfDamage: 2, damage: 6 },

  lead_shield: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Lead Shield', cost: 1, type: 'SKILL', rarity: 'common', element: 'shield', elementTags: ['shield', 'radiation', 'clone'], art: 'card_lead_shield', text: 'Gain 8 Block.', block: 8 },
  spawn_clone: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Spawn Clone', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'cyan', elementTags: ['shield', 'clone'], art: 'card_spawn_clone', text: 'Gain 5 Block. Draw 1.', block: 5, draw: 1 },
  energy_absorb: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Energy Absorb', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'shield', 'clone'], art: 'card_energy_absorb', text: 'Gain 6 Block. Gain 1 Energy.', block: 6, energy: 1 },
  mirror_image: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Mirror Image', cost: 1, type: 'SKILL', rarity: 'common', element: 'shield', elementTags: ['shield', 'clone'], art: 'card_mirror_image', text: 'Gain 7 Block. Apply 1 Weak.', block: 7, weak: 1 },
  fallout: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Fallout', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'toxin', elementTags: ['toxin', 'radiation', 'clone'], art: 'card_fallout', text: 'Gain 4 Block. Apply 1 Poison to all.', block: 4, poison: 1, target: 'all' },
  emergency_clone: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Emergency Clone', cost: 0, type: 'SKILL', rarity: 'rare', element: 'shield', elementTags: ['shield', 'clone'], art: 'card_emergency_clone', text: 'Gain 3 Block. Draw 1.', block: 3, draw: 1 },
  cell_mutation: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Cell Mutation', cost: 1, type: 'SKILL', rarity: 'common', element: 'toxin', elementTags: ['toxin', 'radiation', 'clone'], art: 'card_cell_mutation', text: 'Gain 5 Block. Draw 1.', block: 5, draw: 1 },
  irradiate: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Irradiate', cost: 1, type: 'SKILL', rarity: 'common', element: 'radiation', elementTags: ['radiation', 'clone'], art: 'card_irradiate', text: 'Apply 2 Rad Mark to ALL.', rad: 2, target: 'all' },

  pocket_reactor: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Pocket Reactor', cost: 1, type: 'POWER', rarity: 'rare', element: 'electric', elementTags: ['electric', 'radiation', 'clone'], art: 'card_pocket_reactor', text: 'Gain 1 Energy. Draw 1. Add 1 Pocket Reactor.', energy: 1, draw: 1, power: 'Pocket Reactor', powerAmount: 1 },
  clone_legion: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Clone Legion', cost: 1, type: 'POWER', rarity: 'rare', element: 'cyan', elementTags: ['physical', 'clone'], art: 'card_clone_legion', text: 'Draw 1. Add 1 Clone Legion.', draw: 1, power: 'Clone Legion', powerAmount: 1 },
  toxic_decay: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Toxic Decay', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'toxin', elementTags: ['toxin', 'clone'], art: 'card_toxic_decay', text: 'Poison cards apply +1 Poison.', power: 'Toxic Decay', powerAmount: 1 },
  half_life: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Half-Life', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'radiation', elementTags: ['radiation', 'clone'], art: 'card_half_life', text: 'Rad Mark cards apply +1 Rad Mark.', power: 'Half-Life', powerAmount: 1 },
  meltdown: { owner: RADIOACTIVE_CLONE_ASSASSIN_ID, title: 'Meltdown', cost: 2, type: 'POWER', rarity: 'rare', element: 'fire', elementTags: ['fire', 'radiation', 'clone'], art: 'card_meltdown', text: 'Attack cards gain +2 damage.', power: 'Meltdown', powerAmount: 1 },

  // Brawler Warrior character cards
  static_strike: { owner: BRAWLER_WARRIOR_ID, title: 'Static Strike', cost: 1, type: 'ATTACK', rarity: 'common', element: 'electric', elementTags: ['electric', 'brawler'], art: 'card_static_strike', text: 'Deal 7 damage. Apply 1 Shock.', damage: 7, shock: 1 },
  chilled_blade: { owner: BRAWLER_WARRIOR_ID, title: 'Chilled Blade', cost: 1, type: 'ATTACK', rarity: 'common', element: 'frost', elementTags: ['frost', 'electric', 'brawler'], art: 'card_chilled_blade', text: 'Deal 6 damage. Apply 1 Frost and 1 Shock.', damage: 6, frost: 1, shock: 1 },
  thunderous_slam: { owner: BRAWLER_WARRIOR_ID, title: 'Thunderous Slam', cost: 2, type: 'ATTACK', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'physical', 'brawler'], art: 'card_thunderous_slam', text: 'Deal 13 damage. Apply 1 Weak.', damage: 13, weak: 1 },
  superconductive_toss: { owner: BRAWLER_WARRIOR_ID, title: 'Superconductive Toss', cost: 1, type: 'ATTACK', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'frost', 'brawler'], art: 'card_superconductive_toss', text: 'Deal 8 damage. Apply 1 Shock.', damage: 8, shock: 1 },
  thermal_shock: { owner: BRAWLER_WARRIOR_ID, title: 'Thermal Shock', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'fire', elementTags: ['fire', 'frost', 'brawler'], art: 'card_thermal_shock', text: 'Deal 12 damage. Apply 1 Burn and 1 Frost.', damage: 12, burn: 1, frost: 1 },
  chain_lightning: { owner: BRAWLER_WARRIOR_ID, title: 'Chain Lightning', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'electric', elementTags: ['electric', 'brawler'], art: 'card_chain_lightning', text: 'Deal 7 to ALL. Apply 1 Shock.', damage: 7, target: 'all', shock: 1 },
  absolute_zero: { owner: BRAWLER_WARRIOR_ID, title: 'Absolute Zero', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'frost', elementTags: ['frost', 'brawler'], art: 'card_absolute_zero', text: 'Deal 10 damage. Apply 3 Frost.', damage: 10, frost: 3 },

  cryo_shield: { owner: BRAWLER_WARRIOR_ID, title: 'Cryo Shield', cost: 1, type: 'SKILL', rarity: 'common', element: 'frost', elementTags: ['frost', 'shield', 'brawler'], art: 'card_cryo_shield', text: 'Gain 8 Block. Apply 1 Frost.', block: 8, frost: 1 },
  frost_armor: { owner: BRAWLER_WARRIOR_ID, title: 'Frost Armor', cost: 1, type: 'SKILL', rarity: 'common', element: 'frost', elementTags: ['frost', 'shield', 'brawler'], art: 'card_frost_armor', text: 'Gain 10 Block.', block: 10 },
  capacitor_charge: { owner: BRAWLER_WARRIOR_ID, title: 'Capacitor Charge', cost: 0, type: 'SKILL', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'brawler'], art: 'card_capacitor_charge', text: 'Gain 1 Energy. Draw 1.', energy: 1, draw: 1 },
  defibrillate: { owner: BRAWLER_WARRIOR_ID, title: 'Defibrillate', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'shield', 'brawler'], art: 'card_defibrillate', text: 'Gain 5 Block. Draw 1.', block: 5, draw: 1 },
  frost_and_flash: { owner: BRAWLER_WARRIOR_ID, title: 'Frost and Flash', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'frost', elementTags: ['frost', 'electric', 'brawler'], art: 'card_frost_and_flash', text: 'Gain 6 Block. Apply 1 Frost and 1 Shock.', block: 6, frost: 1, shock: 1 },
  overload: { owner: BRAWLER_WARRIOR_ID, title: 'Overload', cost: 0, type: 'SKILL', rarity: 'rare', element: 'electric', elementTags: ['electric', 'brawler'], art: 'card_overload', text: 'Gain 2 Energy. Draw 1.', energy: 2, draw: 1 },

  cryo_electric_core: { owner: BRAWLER_WARRIOR_ID, title: 'Cryo-Electric Core', cost: 1, type: 'POWER', rarity: 'rare', element: 'electric', elementTags: ['electric', 'frost', 'brawler'], art: 'card_cryo_electric_core', text: 'Frost/Electric attacks gain +1 damage.', power: 'Cryo-Electric Core', powerAmount: 1 },
  glacial_aura: { owner: BRAWLER_WARRIOR_ID, title: 'Glacial Aura', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'frost', elementTags: ['frost', 'brawler'], art: 'card_glacial_aura', text: 'Frost cards apply +1 Frost.', power: 'Glacial Aura', powerAmount: 1 },
  voltage_generator: { owner: BRAWLER_WARRIOR_ID, title: 'Voltage Generator', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'brawler'], art: 'card_voltage_generator', text: 'Electric cards apply +1 Shock.', power: 'Voltage Generator', powerAmount: 1 },

  // Taekwondo Fighter character cards
  cyber_kick: { owner: TAEKWONDO_FIGHTER_ID, title: 'Cyber Kick', cost: 1, type: 'ATTACK', rarity: 'common', element: 'electric', elementTags: ['electric', 'physical', 'taekwondo'], art: 'card_cyber_kick', text: 'Deal 7 damage. Apply 1 Shock.', damage: 7, shock: 1 },
  rapid_jabs: { owner: TAEKWONDO_FIGHTER_ID, title: 'Rapid Jabs', cost: 1, type: 'ATTACK', rarity: 'common', element: 'cyan', elementTags: ['physical', 'taekwondo'], art: 'card_rapid_jabs', text: 'Deal 3 damage three times.', damage: 3, hits: 3 },
  axe_kick: { owner: TAEKWONDO_FIGHTER_ID, title: 'Axe Kick', cost: 1, type: 'ATTACK', rarity: 'common', element: 'cyan', elementTags: ['physical', 'taekwondo'], art: 'card_axe_kick', text: 'Deal 9 damage. Apply 1 Vulnerable.', damage: 9, vulnerable: 1 },
  sweep_kick: { owner: TAEKWONDO_FIGHTER_ID, title: 'Sweep Kick', cost: 1, type: 'ATTACK', rarity: 'common', element: 'water', elementTags: ['physical', 'water', 'taekwondo'], art: 'card_sweep_kick', text: 'Deal 6 damage. Apply 1 Weak.', damage: 6, weak: 1 },
  spinning_heel_kick: { owner: TAEKWONDO_FIGHTER_ID, title: 'Spinning Heel Kick', cost: 2, type: 'ATTACK', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'physical', 'taekwondo'], art: 'card_spinning_heel_kick', text: 'Deal 14 damage. Apply 1 Shock.', damage: 14, shock: 1 },
  shockwave_strike: { owner: TAEKWONDO_FIGHTER_ID, title: 'Shockwave Strike', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'electric', elementTags: ['electric', 'taekwondo'], art: 'card_shockwave_strike', text: 'Deal 8 to ALL. Apply 1 Shock.', damage: 8, target: 'all', shock: 1 },
  finisher_lightning_drive: { owner: TAEKWONDO_FIGHTER_ID, title: 'Finisher Lightning Drive', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'electric', elementTags: ['electric', 'physical', 'taekwondo'], art: 'card_finisher_lightning_drive', text: 'Deal 16 damage. Apply 2 Shock.', damage: 16, shock: 2 },

  iron_guard: { owner: TAEKWONDO_FIGHTER_ID, title: 'Iron Guard', cost: 1, type: 'SKILL', rarity: 'common', element: 'shield', elementTags: ['shield', 'taekwondo'], art: 'card_iron_guard', text: 'Gain 8 Block.', block: 8 },
  evasive_step: { owner: TAEKWONDO_FIGHTER_ID, title: 'Evasive Step', cost: 0, type: 'SKILL', rarity: 'common', element: 'cyan', elementTags: ['shield', 'taekwondo'], art: 'card_evasive_step', text: 'Gain 4 Block. Draw 1.', block: 4, draw: 1 },
  focus_energy: { owner: TAEKWONDO_FIGHTER_ID, title: 'Focus Energy', cost: 0, type: 'SKILL', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'taekwondo'], art: 'card_focus_energy', text: 'Gain 1 Energy. Draw 1.', energy: 1, draw: 1 },
  cloud_walk: { owner: TAEKWONDO_FIGHTER_ID, title: 'Cloud Walk', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'water', elementTags: ['water', 'shield', 'taekwondo'], art: 'card_cloud_walk', text: 'Gain 6 Block. Draw 1.', block: 6, draw: 1 },
  perfect_balance: { owner: TAEKWONDO_FIGHTER_ID, title: 'Perfect Balance', cost: 1, type: 'SKILL', rarity: 'common', element: 'shield', elementTags: ['shield', 'taekwondo'], art: 'card_perfect_balance', text: 'Gain 7 Block. Gain 1 Energy.', block: 7, energy: 1 },
  combat_rhythm: { owner: TAEKWONDO_FIGHTER_ID, title: 'Combat Rhythm', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'cyan', elementTags: ['physical', 'taekwondo'], art: 'card_combat_rhythm', text: 'Gain 3 Block. Draw 2.', block: 3, draw: 2 },
  kinetic_deflection: { owner: TAEKWONDO_FIGHTER_ID, title: 'Kinetic Deflection', cost: 1, type: 'SKILL', rarity: 'uncommon', element: 'shield', elementTags: ['shield', 'physical', 'taekwondo'], art: 'card_kinetic_deflection', text: 'Gain 9 Block. Apply 1 Weak.', block: 9, weak: 1 },
  chakra_shield: { owner: TAEKWONDO_FIGHTER_ID, title: 'Chakra Shield', cost: 2, type: 'SKILL', rarity: 'rare', element: 'shield', elementTags: ['shield', 'taekwondo'], art: 'card_chakra_shield', text: 'Gain 14 Block. Draw 1.', block: 14, draw: 1 },

  endless_flow: { owner: TAEKWONDO_FIGHTER_ID, title: 'Endless Flow', cost: 1, type: 'POWER', rarity: 'rare', element: 'water', elementTags: ['water', 'taekwondo'], art: 'card_endless_flow', text: 'Every 3rd card each turn draws 1.', power: 'Endless Flow', powerAmount: 1 },
  kinetic_battery: { owner: TAEKWONDO_FIGHTER_ID, title: 'Kinetic Battery', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'electric', elementTags: ['electric', 'taekwondo'], art: 'card_kinetic_battery', text: 'Energy cards gain +1 Energy.', power: 'Kinetic Battery', powerAmount: 1 },
  combo_mastery: { owner: TAEKWONDO_FIGHTER_ID, title: 'Combo Mastery', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'cyan', elementTags: ['physical', 'taekwondo'], art: 'card_combo_mastery', text: 'Attack cards gain +1 damage.', power: 'Combo Mastery', powerAmount: 1 },
  hyper_reflexes: { owner: TAEKWONDO_FIGHTER_ID, title: 'Hyper Reflexes', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'shield', elementTags: ['shield', 'taekwondo'], art: 'card_hyper_reflexes', text: 'Skill cards gain +1 Block.', power: 'Hyper Reflexes', powerAmount: 1 },
  zen_state: { owner: TAEKWONDO_FIGHTER_ID, title: 'Zen State', cost: 1, type: 'POWER', rarity: 'rare', element: 'water', elementTags: ['water', 'taekwondo'], art: 'card_zen_state', text: 'Taekwondo cards gain +1 damage or Block.', power: 'Zen State', powerAmount: 1 },

  // Oni Cataclysm first-character deck cards
  oni_cleave: { title: 'Oni Cleave', cost: 1, type: 'ATTACK', rarity: 'common', element: 'fire', elementTags: ['fire'], art: 'card_plasma_cut', text: 'Deal 8 damage. Apply 1 Burn.', damage: 8, burn: 1 },
  burning_aegis: { title: 'Burning Aegis', cost: 1, type: 'SKILL', rarity: 'common', element: 'fire', elementTags: ['fire'], art: 'card_grid_guard', text: 'Gain 9 Block. Apply 1 Burn.', block: 9, burn: 1 },
  radiation_mark: { title: 'Radiation Mark', cost: 1, type: 'ATTACK', rarity: 'common', element: 'radiation', elementTags: ['radiation'], art: 'card_protocol_spark', text: 'Deal 5 damage. Apply 3 Rad Mark.', damage: 5, rad: 3 },
  demon_reactor: { title: 'Demon Reactor', cost: 1, type: 'POWER', rarity: 'rare', element: 'fire', elementTags: ['fire', 'radiation'], art: 'card_overclock', text: '+2 Fire/Rad damage. Burn/Rad +1.', power: 'Demon Reactor', powerAmount: 1 },
  blood_price: { title: 'Blood Price', cost: 0, type: 'CORRUPTION', rarity: 'rare', element: 'purple', elementTags: ['fire'], art: 'card_overclock', text: 'Lose 3 HP. Gain 2 Energy. Draw 1.', selfDamage: 3, energy: 2, draw: 1 },
  core_detonate: { title: 'Core Detonate', cost: 2, type: 'ATTACK', rarity: 'rare', element: 'fire', elementTags: ['fire', 'radiation'], art: 'card_plasma_cut', text: 'Deal 10 to ALL. Apply 2 Burn and 1 Rad.', damage: 10, target: 'all', burn: 2, rad: 1 },
  thunder_oni: { title: 'Thunder Oni', cost: 1, type: 'ATTACK', rarity: 'uncommon', element: 'electric', elementTags: ['electric'], art: 'card_shock_blade', text: 'Deal 6 damage twice. Apply 1 Shock.', damage: 6, hits: 2, shock: 1 },
  hellfire_pact: { title: 'Hellfire Pact', cost: 1, type: 'POWER', rarity: 'rare', element: 'fire', elementTags: ['fire'], art: 'card_overclock', text: 'Burn +1. Gain 4 Block when applying Burn.', power: 'Hellfire Pact', powerAmount: 1 },

  // Buff powers for future character decks
  guardian_matrix: { title: 'Guardian Matrix', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'shield', elementTags: ['shield'], art: 'card_grid_guard', text: 'Block cards gain +2 Block.', power: 'Guardian Matrix', powerAmount: 1 },
  storm_circuit: { title: 'Storm Circuit', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'electric', elementTags: ['electric'], art: 'card_protocol_spark', text: 'Electric attacks gain +1 damage and +1 Shock.', power: 'Storm Circuit', powerAmount: 1 },
  cryo_engine: { title: 'Cryo Engine', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'frost', elementTags: ['frost'], art: 'card_frost_strike', text: 'Frost cards apply +1 Frost.', power: 'Cryo Engine', powerAmount: 1 },
  venom_injector: { title: 'Venom Injector', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'toxin', elementTags: ['toxin'], art: 'card_toxin_injection', text: 'Toxin cards apply +1 Poison.', power: 'Venom Injector', powerAmount: 1 },
  water_core: { title: 'Water Core', cost: 1, type: 'POWER', rarity: 'uncommon', element: 'water', elementTags: ['water'], art: 'card_grid_guard', text: 'Water/Frost cards give +2 Block.', power: 'Water Core', powerAmount: 1 }
};

const CHARACTERS = [
  {
    id: SKELETON_VANGUARD_ID, name: 'Neon Skeleton Vanguard', hp: 75, art: 'char_skeleton_vanguard', color: '#54f8ff', startingRelicId: 'priests_coffin',
    starterDeck: ['neon_slash','neon_slash','neon_slash','grid_guard','grid_guard','grid_guard','protocol_spark','shock_blade','frost_strike','overclock'],
    rewardTheme: ['physical','electric','frost','shield']
  },
  {
    id: 'assassin_clone', name: 'Assassin Clone', hp: 65, art: 'char_assassin_clone', color: '#ff4df0',
    starterDeck: ['neon_slash','neon_slash','grid_guard','grid_guard','toxin_injection','corrosive_needle','voltage_step','overclock','toxic_screen','protocol_spark'],
    rewardTheme: ['toxin','electric','purple']
  },
  {
    id: CYBER_ARM_HERO_ID, name: 'Cyber Arm Hero', hp: 82, art: 'char_cyber_arm_hero', color: '#ff9f2f', startingRelicId: 'release_valve',
    starterDeck: ['shock_blade','shock_blade','grid_guard','grid_guard','protocol_spark','ion_pierce','guardian_matrix','overclock','neon_slash','rad_lance'],
    rewardTheme: ['electric','radiation','shield']
  },
  {
    id: TAEKWONDO_FIGHTER_ID, name: 'Taekwondo Fighter', hp: 70, art: 'char_taekwondo_fighter', color: '#42f6ff', startingRelicId: 'cyber_black_belt',
    starterDeck: ['cyber_kick','cyber_kick','cyber_kick','iron_guard','iron_guard','iron_guard','rapid_jabs','evasive_step','focus_energy','perfect_balance'],
    rewardTheme: ['taekwondo','physical','electric','shield','water']
  },
  {
    id: 'oni_cataclysm', name: 'Oni Cataclysm', hp: 92, art: 'char_oni_cataclysm', color: '#ff315e',
    starterDeck: ['oni_cleave','oni_cleave','burning_aegis','burning_aegis','radiation_mark','radiation_mark','shock_blade','plasma_cut','blood_price','demon_reactor'],
    rewardTheme: ['fire','radiation','electric','purple']
  },
  {
    id: 'euclid_vector', name: 'Euclid Vector', hp: 68, art: 'char_euclid_vector', color: '#8cff3f',
    starterDeck: ['toxin_injection','corrosive_needle','toxic_screen','grid_guard','grid_guard','rad_lance','venom_injector','water_pulse','neon_slash','overclock'],
    rewardTheme: ['toxin','radiation','water']
  },
  {
    id: BRAWLER_WARRIOR_ID, name: 'Brawler Warrior', hp: 85, art: 'char_brawler_warrior', color: '#3fffc1', startingRelicId: 'superconductive_crystal',
    starterDeck: ['static_strike','static_strike','static_strike','cryo_shield','cryo_shield','cryo_shield','chilled_blade','capacitor_charge','frost_armor','voltage_generator'],
    rewardTheme: ['brawler','electric','frost','shield']
  },
  {
    id: RADIOACTIVE_CLONE_ASSASSIN_ID, name: 'Radioactive Clone Assassin', hp: 66, art: 'char_assassin_clone', color: '#cfff42', startingRelicId: 'nuclear_core',
    starterDeck: ['radioactive_strike','radioactive_strike','radioactive_strike','lead_shield','lead_shield','lead_shield','twin_clone','spawn_clone','irradiate','pocket_reactor'],
    rewardTheme: ['clone','radiation','toxin','shield','electric']
  }
];

const ENEMIES = [
  { id: 'toxic_drone_hound', name: 'Toxic Drone Hound', hp: 38, art: 'enemy_toxic_drone_hound', intent: 'Bite', damage: 7, color: '#8cff3f' },
  { id: 'neon_cultist', name: 'Neon Cultist', hp: 42, art: 'enemy_neon_cultist', intent: 'Dark Bolt', damage: 8, color: '#ff4df0' },
  { id: 'glitch_raven', name: 'Glitch Raven', hp: 30, art: 'enemy_glitch_raven', intent: 'Glitch Peck', damage: 6, color: '#54f8ff' },
  { id: 'scrap_reaper', name: 'Scrap Reaper', hp: 46, art: 'enemy_scrap_reaper', intent: 'Scythe', damage: 10, color: '#ffd86a' },
  { id: 'corrupted_sentinel', name: 'Corrupted Sentinel', hp: 65, art: 'enemy_corrupted_sentinel', intent: 'Core Slam', damage: 13, color: '#b164ff' }
];


const MAP_LAYERS = [
  [{ id: 'n0a', type: 'battle', x: 250, y: 600, next: ['n1a', 'n1b'] }],
  [
    { id: 'n1a', type: 'battle', x: 430, y: 430, next: ['n2a', 'n2b'] },
    { id: 'n1b', type: 'treasure', x: 450, y: 690, next: ['n2b', 'n2c'] }
  ],
  [
    { id: 'n2a', type: 'shop', x: 650, y: 365, next: ['n3a', 'n3b'] },
    { id: 'n2b', type: 'battle', x: 685, y: 565, next: ['n3a', 'n3c'] },
    { id: 'n2c', type: 'rest', x: 625, y: 730, next: ['n3c'] }
  ],
  [
    { id: 'n3a', type: 'elite', x: 890, y: 315, next: ['n4a', 'n4b'] },
    { id: 'n3b', type: 'battle', x: 945, y: 520, next: ['n4b'] },
    { id: 'n3c', type: 'shop', x: 880, y: 720, next: ['n4b', 'n4c'] }
  ],
  [
    { id: 'n4a', type: 'secret', x: 1140, y: 300, next: ['n5a'] },
    { id: 'n4b', type: 'battle', x: 1160, y: 535, next: ['n5a', 'n5b'] },
    { id: 'n4c', type: 'rest', x: 1085, y: 745, next: ['n5b'] }
  ],
  [
    { id: 'n5a', type: 'elite', x: 1360, y: 410, next: ['boss'] },
    { id: 'n5b', type: 'shop', x: 1340, y: 675, next: ['boss'] }
  ],
  [{ id: 'boss', type: 'boss', x: 1490, y: 520, next: [] }]
];
const MAP_NODES = MAP_LAYERS.flat();

const RELIC_DB = {
  emergency_patch: { name: 'Emergency Patch', price: 135, tier: 'common', color: '#54f8ff', art: 'relic_emergency_patch', text: 'Once per combat below 30% HP: gain 8 Block.' },
  overclock_core: { name: 'Overclock Core', price: 170, tier: 'rare', color: '#ffe14a', art: 'relic_overclock_core', text: 'First non-zero card cost each combat is reduced by 1.' },
  glitch_lens: { name: 'Glitch Lens', price: 145, tier: 'common', color: '#ff4df0', art: 'relic_glitch_lens', text: 'Secret boss nodes pulse on the map.' },
  nano_plating: { name: 'Nano Plating', price: 150, tier: 'common', color: '#54f8ff', art: 'relic_nano_plating', text: 'Skill cards grant +1 extra Block.' },
  volt_blade_handle: { name: 'Volt Blade Handle', price: 160, tier: 'uncommon', color: '#ffe14a', art: 'relic_volt_blade_handle', text: 'Attack cards deal +1 damage.' },
  memory_cache: { name: 'Memory Cache', price: 150, tier: 'common', color: '#80dfff', art: 'relic_memory_cache', text: 'Draw +1 card on turn 1.' },
  firewall_charm: { name: 'Firewall Charm', price: 165, tier: 'uncommon', color: '#54f8ff', art: 'relic_firewall_charm', text: 'Reduce first incoming combat damage by 3.' },
  pulse_reactor: { name: 'Pulse Reactor', price: 180, tier: 'rare', color: '#ffd86a', art: 'relic_pulse_reactor', text: 'After 3 attacks in a turn, gain 1 Energy once.' },
  ice_protocol: { name: 'Ice Protocol', price: 155, tier: 'uncommon', color: '#80dfff', art: 'relic_ice_protocol', text: 'Every 3rd Skill applies 1 Frost.' },
  cultist_token: { name: 'Cultist Token', price: 155, tier: 'common', color: '#b164ff', art: 'relic_cultist_token', text: 'Elite victories drop +15 credits.' },
  vault_key_fragment: { name: 'Vault Key Fragment', price: 190, tier: 'rare', color: '#ffd86a', art: 'relic_vault_key_fragment', text: 'Relic reward rooms offer 1 extra choice.' },
  phoenix_spark: { name: 'Phoenix Spark', price: 230, tier: 'boss', color: '#ff7740', art: 'relic_phoenix_spark', text: 'Once per run, revive at 25% HP.' },
  nuclear_core: { name: 'Nuclear Core', price: 0, tier: 'starting', starting: true, color: '#cfff42', art: 'starting_nuclear_core', text: 'Start each combat with 1 Clone and 6 clone-block.' },
  superconductive_crystal: { name: 'Superconductive Crystal', price: 0, tier: 'starting', starting: true, color: '#80dfff', art: 'starting_superconductive_crystal', text: 'First turn: enemies start with 2 Frostbite and 2 Shock.' },
  priests_coffin: { name: "Priest's Coffin", price: 0, tier: 'starting', starting: true, color: '#b164ff', art: 'starting_priests_coffin', text: 'Exhausting a card grants 3 Bone Shield.' },
  release_valve: { name: 'Release Valve', price: 0, tier: 'starting', starting: true, color: '#ff9f2f', art: 'starting_release_valve', text: 'At max Overheat, the next Attack deals +50% damage.' },
  cyber_black_belt: { name: 'Cyber Black Belt', price: 0, tier: 'starting', starting: true, color: '#42f6ff', art: 'starting_cyber_black_belt', text: 'Start combat with 2 Flow. Stance changes draw 1.' }
};
const RELIC_IDS = Object.keys(RELIC_DB);
const UTILITY_DB = {
  nano_repair: { name: 'Nano Repair', price: 80, color: '#8cff3f', text: 'Heal 20 HP.' },
  energy_refill: { name: 'Energy Refill', price: 65, color: '#ffe14a', text: 'Gain +1 max Energy this run.' },
  system_purge: { name: 'System Purge', price: 70, color: '#54f8ff', text: 'Clear player Poison/Weak.' },
  remove_card: { name: 'Remove Card', price: 75, color: '#ff4df0', text: 'Remove one card from your deck.' }
};

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
    this.currentLayer = 0;
    this.availableNodes = ['n0a'];
    this.completedNodes = [];
    this.currentNodeType = 'battle';
    this.selectedTargetIndex = 0;
    this.credits = 50;
    this.block = 0;
    this.cloneCount = 0;
    this.cloneBlock = 0;
    this.boneShield = 0;
    this.flow = 0;
    this.stance = null;
    this.stanceDrawLock = false;
    this.overheat = 0;
    this.maxOverheat = 10;
    this.releaseValveAttackBoost = false;
    this.currentAttackDamageMultiplier = 1;
    this.powers = {};
    this.relics = [];
    this.relicState = {};
    this.combatRelicState = {};
    this.playerStatus = {};
    this.elementMemory = new Set();
    this.message = '';
    this.fx = [];
    this.rewardCards = [];
    this.rewardRelics = [];
    this.relicRewardSource = null;
    this.relicRewardStrength = 'standard';
    this.shopCards = [];
    this.shopRelics = [];
    this.shopUtilities = [];
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
    this.currentLayer = 0;
    this.availableNodes = ['n0a'];
    this.completedNodes = [];
    this.currentNodeType = 'battle';
    this.selectedTargetIndex = 0;
    this.maxEnergy = base.id === 'oni_cataclysm' ? 3 : 3;
    this.powers = {};
    this.relics = [];
    this.relicState = {};
    this.combatRelicState = {};
    this.ensureStartingRelic(base);
    this.playerStatus = {};
    this.elementMemory = new Set();
    this.deck = this.getStarterDeck(base);
    this.activeMapNode = this.getNodeById('n0a');
    this.startCombat('battle');
    this.save();
  }


  getStarterDeck(character) {
    const starter = character?.starterDeck || CHARACTERS[0].starterDeck || ['neon_slash', 'grid_guard', 'protocol_spark'];
    return starter.filter(id => CARD_DB[id]);
  }

  cardRewardPool() {
    const ch = CHARACTERS[this.selectedCharacterIndex] ?? CHARACTERS[0];
    const theme = new Set(ch.rewardTheme || []);
    const ownerOnly = [BRAWLER_WARRIOR_ID, TAEKWONDO_FIGHTER_ID].includes(ch.id);
    const eligible = Object.keys(CARD_DB).filter(id => {
      const owner = CARD_DB[id].owner;
      return ownerOnly ? owner === ch.id : !owner || owner === ch.id;
    });
    const themed = eligible.filter(id => {
      const tags = CARD_DB[id].elementTags || [];
      return tags.some(t => theme.has(t)) || ['protocol','rare'].includes(CARD_DB[id].rarity);
    });
    return themed.length >= 3 ? themed : eligible;
  }

  save() {
    if (!this.player) return;
    safeSet(SAVE_KEY, JSON.stringify({
      character: this.selectedCharacterIndex,
      hp: this.player.hp,
      maxHp: this.player.maxHp,
      deck: this.deck,
      node: this.node,
      currentLayer: this.currentLayer,
      availableNodes: this.availableNodes,
      completedNodes: this.completedNodes,
      credits: this.credits,
      relics: this.relics,
      relicState: this.relicState,
      maxEnergy: this.maxEnergy
    }));
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
      this.deck = Array.isArray(data.deck) ? data.deck.filter(id => CARD_DB[id]) : this.getStarterDeck(base);
      this.powers = {};
      this.relics = this.normalizeRelics(data.relics);
      this.relicState = data.relicState && typeof data.relicState === 'object' ? data.relicState : {};
      this.ensureStartingRelic(base);
      this.combatRelicState = {};
      this.playerStatus = {};
      this.elementMemory = new Set();
      this.node = data.node ?? 0;
      this.currentLayer = data.currentLayer ?? Math.min(this.node, MAP_LAYERS.length - 1);
      this.availableNodes = Array.isArray(data.availableNodes) ? data.availableNodes : (MAP_LAYERS[this.currentLayer] || []).map(n => n.id);
      this.completedNodes = Array.isArray(data.completedNodes) ? data.completedNodes : [];
      this.maxEnergy = data.maxEnergy ?? this.maxEnergy ?? 3;
      this.credits = data.credits ?? 50;
      this.state = 'map';
      this.save();
    } catch (err) {
      console.warn('[save] invalid save', err);
      this.newRun();
    }
  }


  cardPrice(card, slotIndex = 0) {
    const rarityBase = { common: 90, uncommon: 115, rare: 150, protocol: 165 }[card?.rarity] || 100;
    return rarityBase + slotIndex * 10;
  }

  startCombat(kind = 'battle') {
    this.currentNodeType = kind;
    const count = kind === 'boss' || kind === 'secret' ? 1 : kind === 'elite' ? 2 : 1 + (this.node % 3 === 0 ? 1 : 0);
    const pool = kind === 'boss'
      ? [{ ...ENEMIES[4], name: 'Vault Overseer', hp: 140, damage: 16, intent: 'Core Crush', color: '#ff315e' }]
      : kind === 'secret'
        ? [{ ...ENEMIES[4], name: 'Secret Blacknet Boss', hp: 125, damage: 15, intent: 'Hidden Protocol', color: '#ff4df0' }]
        : kind === 'elite' ? ENEMIES.slice(2, 5) : ENEMIES.slice(0, 4);
    this.enemies = Array.from({ length: count }, (_, i) => {
      const tpl = copy(pool[(this.node + i) % pool.length]);
      const bonus = kind === 'boss' ? 35 : kind === 'secret' ? 30 : kind === 'elite' ? 18 : 0;
      tpl.maxHp = tpl.hp + bonus;
      tpl.hp = tpl.maxHp;
      tpl.block = 0;
      tpl.status = {};
      tpl.intentPlan = this.rollEnemyIntent(tpl, kind, i);
      return tpl;
    });
    this.drawPile = shuffle(this.deck);
    this.discard = [];
    this.hand = [];
    this.combatRelicState = {
      turnNumber: 1,
      cardsPlayedThisCombat: 0,
      cardsPlayedThisTurn: 0,
      attacksPlayedThisTurn: 0,
      skillsPlayedThisCombat: 0,
      emergencyPatchUsed: false,
      firewallCharmUsed: false,
      overclockCoreUsed: false,
      pulseReactorUsedThisTurn: false
    };
    this.resetStartingRelicCombatState();
    this.energy = this.maxEnergy + (this.hasRelic('neural_shard') ? 1 : 0);
    this.block = this.hasRelic('ghost_firewall') ? 4 : 0;
    this.playerStatus = this.playerStatus || {};
    this.selectedTargetIndex = this.enemies.findIndex(e => e.hp > 0);
    if (this.selectedTargetIndex < 0) this.selectedTargetIndex = 0;
    this.turn = 'player';
    this.message = kind === 'boss' ? 'Boss protocol detected.' : kind === 'secret' ? 'SECRET BOSS FOUND.' : 'Combat initialized.';
    this.applyStartingRelicCombatStart();
    const openingDraw = 5 + (this.hasRelic('void_lens') ? 1 : 0) + (this.hasRelic('memory_cache') ? 1 : 0);
    this.drawCards(openingDraw);
    if (this.hasRelic('memory_cache')) this.floatText(340, 760, 'MEMORY CACHE +1 DRAW', RELIC_DB.memory_cache.color);
    this.state = 'combat';
  }

  resetStartingRelicCombatState() {
    this.cloneCount = 0;
    this.cloneBlock = 0;
    this.boneShield = 0;
    this.flow = 0;
    this.stance = null;
    this.stanceDrawLock = false;
    this.overheat = 0;
    this.maxOverheat = this.maxOverheat || 10;
    this.releaseValveAttackBoost = false;
    this.currentAttackDamageMultiplier = 1;
  }

  applyStartingRelicCombatStart() {
    if (this.hasRelic('nuclear_core')) {
      this.cloneCount += 1;
      this.cloneBlock += 6;
      this.floatText(315, 585, 'NUCLEAR CORE +1 CLONE', RELIC_DB.nuclear_core.color);
    }
    if (this.hasRelic('superconductive_crystal')) {
      this.enemies.forEach(enemy => {
        if (!enemy || enemy.hp <= 0) return;
        enemy.status = enemy.status || {};
        enemy.status.Frostbite = (enemy.status.Frostbite || 0) + 2;
        enemy.status.Shock = (enemy.status.Shock || 0) + 2;
      });
      this.floatText(900, 245, 'SUPERCONDUCTIVE +FROSTBITE', RELIC_DB.superconductive_crystal.color);
    }
    if (this.hasRelic('cyber_black_belt')) {
      this.flow += 2;
      this.floatText(315, 615, 'CYBER BLACK BELT +2 FLOW', RELIC_DB.cyber_black_belt.color);
    }
  }

  gainBoneShield(amount = 3) {
    if (!this.hasRelic('priests_coffin')) return;
    const gain = Math.max(0, amount || 0);
    if (!gain) return;
    this.boneShield += gain;
    this.floatText(315, 650, `+${gain} BONE SHIELD`, RELIC_DB.priests_coffin.color);
  }

  gainOverheat(amount = 1) {
    const gain = Math.max(0, amount || 0);
    if (!gain) return;
    this.overheat = clamp((this.overheat || 0) + gain, 0, this.maxOverheat || 10);
    if (this.hasRelic('release_valve') && this.overheat >= (this.maxOverheat || 10) && !this.releaseValveAttackBoost) {
      this.releaseValveAttackBoost = true;
      this.overheat = 0;
      this.floatText(315, 680, 'RELEASE VALVE ARMED', RELIC_DB.release_valve.color);
    }
  }

  changeStance(nextStance) {
    if (!nextStance || this.stance === nextStance) return;
    this.stance = nextStance;
    if (!this.hasRelic('cyber_black_belt') || this.stanceDrawLock) return;
    this.stanceDrawLock = true;
    try {
      this.drawCards(1);
      this.floatText(320, 735, 'BLACK BELT +1 DRAW', RELIC_DB.cyber_black_belt.color);
    } finally {
      this.stanceDrawLock = false;
    }
  }

  rollEnemyIntent(enemy, kind = 'battle', offset = 0) {
    const mod = (this.node + offset + Math.floor(this.time * 10)) % 4;
    if (kind === 'boss' || enemy.name.includes('Boss') || enemy.name.includes('Overseer')) {
      return [
        { type: 'attack', label: 'Core Crush', value: enemy.damage + 4 },
        { type: 'debuff', label: 'Corrupt', value: 2 },
        { type: 'shield', label: 'Fortify', value: 18 },
        { type: 'attackDebuff', label: 'Rend', value: enemy.damage, weak: 1 }
      ][mod];
    }
    if (enemy.id === 'toxic_drone_hound') return mod % 2 ? { type: 'poison', label: 'Toxic Bite', value: 5, poison: 2 } : { type: 'attack', label: 'Bite', value: enemy.damage };
    if (enemy.id === 'neon_cultist') return mod % 3 === 0 ? { type: 'buff', label: 'Dark Rite', value: 3 } : { type: 'debuff', label: 'Hex', value: 1 };
    if (enemy.id === 'glitch_raven') return mod % 2 ? { type: 'debuff', label: 'Glitch', value: 1 } : { type: 'attack', label: 'Peck', value: enemy.damage };
    if (enemy.id === 'scrap_reaper') return mod % 2 ? { type: 'attackDebuff', label: 'Scythe', value: enemy.damage, weak: 1 } : { type: 'shield', label: 'Scrap Armor', value: 10 };
    if (enemy.id === 'corrupted_sentinel') return mod % 2 ? { type: 'shield', label: 'Core Guard', value: 14 } : { type: 'attack', label: 'Core Slam', value: enemy.damage };
    return { type: 'attack', label: enemy.intent || 'Attack', value: enemy.damage || 6 };
  }

  normalizeRelics(ids) {
    if (!Array.isArray(ids)) return [];
    return [...new Set(ids.filter(id => typeof id === 'string' && id.trim()))];
  }

  ensureStartingRelic(character) {
    const id = character?.startingRelicId;
    if (!id || !RELIC_DB[id] || this.relics.includes(id)) return false;
    this.relics.push(id);
    return true;
  }

  hasRelic(id) { return this.relics.includes(id); }

  getRelic(id) {
    return RELIC_DB[id] || { name: String(id || 'Unknown Relic'), color: '#54f8ff', art: `relic_${id}`, text: 'Legacy relic protocol.' };
  }

  addRelic(id, announce = true) {
    if (!id || !RELIC_DB[id] || this.relics.includes(id)) return false;
    this.relics.push(id);
    if (announce) this.floatText(800, 650, `${RELIC_DB[id].name} ACQUIRED`, RELIC_DB[id].color);
    return true;
  }

  cardCost(card) {
    const base = Math.max(0, card?.cost || 0);
    if (this.state === 'combat' && this.hasRelic('overclock_core') && !this.combatRelicState?.overclockCoreUsed && base > 0) return base - 1;
    return base;
  }

  relicChoiceCount() {
    return this.hasRelic('vault_key_fragment') ? 4 : 3;
  }

  relicRewardPool(strength = 'standard') {
    const owned = new Set(this.relics);
    const available = RELIC_IDS.filter(id => !owned.has(id) && !RELIC_DB[id]?.starting);
    if (strength !== 'strong') return available;
    const strong = available.filter(id => ['rare', 'boss'].includes(RELIC_DB[id].tier));
    const fill = available.filter(id => !strong.includes(id));
    return [...strong, ...fill];
  }

  buildRelicChoices(strength = 'standard') {
    const count = this.relicChoiceCount();
    const pool = this.relicRewardPool(strength);
    const primary = strength === 'strong' ? pool.slice(0, Math.max(count, 4)) : pool;
    return shuffle(primary.length >= count ? primary : pool).slice(0, count);
  }

  openRelicReward(source, strength = 'standard') {
    this.relicRewardSource = source;
    this.relicRewardStrength = strength;
    this.rewardRelics = this.buildRelicChoices(strength);
    if (!this.rewardRelics.length) {
      this.finishRelicReward();
      return;
    }
    this.state = 'relicReward';
    this.save();
  }

  finishRelicReward() {
    this.completeCurrentNode();
    this.state = this.currentLayer >= MAP_LAYERS.length ? 'victory' : 'map';
    this.rewardRelics = [];
    this.relicRewardSource = null;
    this.save();
  }

  takeRelicReward(id) {
    if (id) this.addRelic(id);
    this.finishRelicReward();
  }

  resetTurnRelics() {
    this.combatRelicState.turnNumber = (this.combatRelicState.turnNumber || 1) + 1;
    this.combatRelicState.cardsPlayedThisTurn = 0;
    this.combatRelicState.attacksPlayedThisTurn = 0;
    this.combatRelicState.pulseReactorUsedThisTurn = false;
  }

  checkEmergencyPatch(prevHp) {
    if (!this.hasRelic('emergency_patch') || this.combatRelicState?.emergencyPatchUsed || !this.player?.maxHp) return;
    const threshold = this.player.maxHp * .3;
    if (prevHp >= threshold && this.player.hp > 0 && this.player.hp < threshold) {
      this.combatRelicState.emergencyPatchUsed = true;
      this.block += 8;
      this.floatText(300, 610, 'EMERGENCY PATCH +8 BLOCK', RELIC_DB.emergency_patch.color);
    }
  }

  tryPhoenixRevive() {
    if (this.player.hp > 0 || !this.hasRelic('phoenix_spark') || this.relicState.phoenixSparkUsed) return false;
    this.relicState.phoenixSparkUsed = true;
    this.player.hp = Math.max(1, Math.ceil(this.player.maxHp * .25));
    this.block = 0;
    this.floatText(330, 430, 'PHOENIX SPARK REVIVE', RELIC_DB.phoenix_spark.color);
    return true;
  }

  losePlayerHp(amount, text, color, minHp = 0) {
    const loss = Math.max(0, amount || 0);
    if (!loss || !this.player) return;
    const prevHp = this.player.hp;
    this.player.hp = Math.max(minHp, this.player.hp - loss);
    if (text) this.floatText(270, 425, text, color);
    this.checkEmergencyPatch(prevHp);
    if (this.player.hp <= 0) this.tryPhoenixRevive();
  }

  applyIncomingDamage(total) {
    let incoming = Math.max(0, total || 0);
    if (incoming > 0 && this.hasRelic('firewall_charm') && !this.combatRelicState?.firewallCharmUsed) {
      const reduced = Math.min(3, incoming);
      incoming -= reduced;
      this.combatRelicState.firewallCharmUsed = true;
      this.floatText(300, 510, `FIREWALL -${reduced}`, RELIC_DB.firewall_charm.color);
    }
    const cloneAbsorbed = Math.min(Math.max(0, this.cloneBlock || 0), incoming);
    if (cloneAbsorbed) {
      incoming -= cloneAbsorbed;
      this.cloneBlock -= cloneAbsorbed;
      if (this.cloneBlock <= 0) this.cloneCount = 0;
      this.floatText(270, 505, `CLONE -${cloneAbsorbed}`, RELIC_DB.nuclear_core.color);
    }
    const blockAbsorbed = Math.min(this.block, incoming);
    incoming -= blockAbsorbed;
    this.block -= blockAbsorbed;
    const boneAbsorbed = Math.min(Math.max(0, this.boneShield || 0), incoming);
    if (boneAbsorbed) {
      incoming -= boneAbsorbed;
      this.boneShield -= boneAbsorbed;
      this.floatText(270, 530, `BONE -${boneAbsorbed}`, RELIC_DB.priests_coffin.color);
    }
    const hpLoss = incoming;
    const prevHp = this.player.hp;
    this.player.hp -= hpLoss;
    if (total > 0) this.floatText(270, 455, hpLoss ? `-${hpLoss} HP` : 'BLOCKED', hpLoss ? '#ff4767' : '#54f8ff');
    this.checkEmergencyPatch(prevHp);
    if (this.player.hp <= 0) this.tryPhoenixRevive();
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


  getSelectedEnemy() {
    if (this.enemies[this.selectedTargetIndex]?.hp > 0) return this.enemies[this.selectedTargetIndex];
    const next = this.enemies.findIndex(e => e.hp > 0);
    this.selectedTargetIndex = next < 0 ? 0 : next;
    return this.enemies[this.selectedTargetIndex];
  }

  damageEnemy(enemy, amount) {
    if (!enemy || amount <= 0) return 0;
    const absorbed = Math.min(enemy.block || 0, amount);
    enemy.block = Math.max(0, (enemy.block || 0) - absorbed);
    const dealt = Math.max(0, amount - absorbed);
    enemy.hp -= dealt;
    return dealt;
  }

  playCard(index) {
    if (this.state !== 'combat' || this.turn !== 'player') return;
    const id = this.hand[index];
    const card = CARD_DB[id];
    const cost = this.cardCost(card);
    if (!card || this.energy < cost) return;
    const discounted = this.hasRelic('overclock_core') && !this.combatRelicState?.overclockCoreUsed && (card.cost || 0) > cost;
    this.energy -= cost;
    if (discounted) {
      this.combatRelicState.overclockCoreUsed = true;
      this.floatText(330, 720, 'OVERCLOCK CORE -1', RELIC_DB.overclock_core.color);
    }
    this.hand.splice(index, 1);
    this.discard.push(id);
    this.combatRelicState.cardsPlayedThisCombat += 1;
    this.combatRelicState.cardsPlayedThisTurn += 1;

    this.registerElements(card);
    if (card.stance) this.changeStance(card.stance);
    if (card.overheat) this.gainOverheat(card.overheat);

    if (card.selfDamage) {
      this.losePlayerHp(card.selfDamage, `-${card.selfDamage} HP`, '#ff4767', 1);
    }

    if (card.power) {
      this.gainPower(card.power, card.powerAmount || 1);
      this.floatText(300, 610, `${card.power} +${card.powerAmount || 1}`, this.cardColor(card));
    }

    const block = this.computeBlock(card);
    if (block) {
      this.block += block;
      this.floatText(295, 650, `+${block} BLOCK`, '#54f8ff');
    }

    if (card.energy) {
      const energyGain = card.energy + (this.powers.Overclock || 0) + (this.powers['Kinetic Battery'] && (card.elementTags || []).includes('taekwondo') ? this.powers['Kinetic Battery'] : 0);
      this.energy += energyGain;
      this.floatText(300, 715, `+${energyGain} ENERGY`, '#ffd86a');
    }
    if (card.draw) this.drawCards(card.draw);

    const releaseBoostedAttack = card.type === 'ATTACK' && this.releaseValveAttackBoost;
    this.currentAttackDamageMultiplier = releaseBoostedAttack ? 1.5 : 1;
    if (releaseBoostedAttack) {
      this.releaseValveAttackBoost = false;
      this.floatText(330, 690, 'RELEASE VALVE +50%', RELIC_DB.release_valve.color);
    }

    if (card.damage || card.poison || card.shock || card.frost || card.burn || card.rad || card.soaked || card.vulnerable || card.weak) {
      const targets = card.target === 'all' ? this.enemies.filter(e => e.hp > 0) : [this.getSelectedEnemy()].filter(Boolean);
      targets.forEach((target, ti) => {
        const hits = card.hits || 1;
        for (let h = 0; h < hits; h++) {
          if (card.damage) {
            const dmg = this.computeDamage(card, target);
            const dealt = this.damageEnemy(target, dmg);
            const tx = 980 + this.enemies.indexOf(target) * 170;
            this.floatText(tx, 370 + h * 28, dealt > 0 ? `-${dealt}` : 'BLOCK', dealt > 0 ? '#ff4767' : '#54f8ff');
            this.fx.push({ x: tx, y: 430, life: .35, color: this.cardColor(card), kind: 'burst' });
          }
        }
        this.applyStatus(target, card);
        this.tryFusion(card, target);
      });
    }
    this.currentAttackDamageMultiplier = 1;

    this.applyCardRelics(card);
    if (this.enemies.every(e => e.hp <= 0)) this.winCombat();
  }

  computeDamage(card, target) {
    let dmg = card.damage || 0;
    const tags = card.elementTags || [];
    if (this.hasRelic('volt_blade_handle') && card.type === 'ATTACK') dmg += 1;
    if (this.hasRelic('plasma_lens') && card.type === 'ATTACK') dmg += 2;
    if (this.powers.Meltdown && card.type === 'ATTACK') dmg += 2 * this.powers.Meltdown;
    if (this.powers['Cryo-Electric Core'] && card.type === 'ATTACK' && (tags.includes('frost') || tags.includes('electric'))) dmg += this.powers['Cryo-Electric Core'];
    if (this.powers['Combo Mastery'] && card.type === 'ATTACK') dmg += this.powers['Combo Mastery'];
    if (this.powers['Zen State'] && card.type === 'ATTACK' && tags.includes('taekwondo')) dmg += this.powers['Zen State'];
    if (this.powers['Demon Reactor'] && (tags.includes('fire') || tags.includes('radiation'))) dmg += 2 * this.powers['Demon Reactor'];
    if (this.powers['Storm Circuit'] && tags.includes('electric')) dmg += this.powers['Storm Circuit'];
    if (target.status?.Shock) dmg += target.status.Shock;
    if (target.status?.['Rad Mark']) dmg += target.status['Rad Mark'];
    if (target.status?.Vulnerable) dmg = Math.ceil(dmg * 1.5);
    if (target.status?.Soaked && tags.includes('electric')) dmg += 3;
    if (card.type === 'ATTACK' && this.currentAttackDamageMultiplier > 1) dmg = Math.ceil(dmg * this.currentAttackDamageMultiplier);
    return Math.max(0, Math.ceil(dmg));
  }

  computeBlock(card) {
    let block = card.block || 0;
    const tags = card.elementTags || [];
    if (block && this.powers['Guardian Matrix']) block += 2 * this.powers['Guardian Matrix'];
    if (block && this.powers['Water Core'] && (tags.includes('water') || tags.includes('frost'))) block += 2 * this.powers['Water Core'];
    if (block && this.powers['Hyper Reflexes'] && card.type === 'SKILL') block += this.powers['Hyper Reflexes'];
    if (block && this.powers['Zen State'] && (card.elementTags || []).includes('taekwondo')) block += this.powers['Zen State'];
    if (card.type === 'SKILL' && this.hasRelic('nano_plating')) block += 1;
    return block;
  }

  applyCardRelics(card) {
    if (!card) return;
    if (card.type === 'ATTACK') {
      this.combatRelicState.attacksPlayedThisTurn += 1;
      if (this.hasRelic('pulse_reactor') && this.combatRelicState.attacksPlayedThisTurn >= 3 && !this.combatRelicState.pulseReactorUsedThisTurn) {
        this.combatRelicState.pulseReactorUsedThisTurn = true;
        this.energy += 1;
        this.floatText(320, 720, 'PULSE REACTOR +1 ENERGY', RELIC_DB.pulse_reactor.color);
      }
    }
    if (card.type === 'SKILL') {
      this.combatRelicState.skillsPlayedThisCombat += 1;
      if (this.hasRelic('ice_protocol') && this.combatRelicState.skillsPlayedThisCombat % 3 === 0) {
        const target = this.getSelectedEnemy();
        if (target?.hp > 0) {
          this.applyStatus(target, { frost: 1, elementTags: ['frost'] });
          this.floatText(930, 355, 'ICE PROTOCOL', RELIC_DB.ice_protocol.color);
        }
      }
    }
    if (card.exhaust || card.exhausts) this.gainBoneShield(3);
    if (this.powers['Endless Flow'] && this.combatRelicState.cardsPlayedThisTurn > 0 && this.combatRelicState.cardsPlayedThisTurn % 3 === 0) {
      this.drawCards(this.powers['Endless Flow']);
      this.floatText(330, 745, 'ENDLESS FLOW +1 DRAW', '#5fd7ff');
    }
  }

  gainPower(name, amount = 1) {
    this.powers[name] = (this.powers[name] || 0) + amount;
  }

  registerElements(card) {
    for (const tag of card.elementTags || []) {
      if (!['shield', 'physical', 'purple'].includes(tag)) this.elementMemory.add(tag);
    }
  }

  tryFusion(card, enemy) {
    if (!enemy || enemy.hp <= 0) return;
    const has = e => this.elementMemory.has(e);
    let fusion = null;
    if (has('fire') && has('electric')) fusion = { name: 'PLASMA BURN', damage: 4, burn: 1, shock: 1, color: '#ffd86a' };
    else if (has('toxin') && has('frost')) fusion = { name: 'VIRAL FREEZE', damage: 2, poison: 1, frost: 1, color: '#80dfff' };
    else if (has('radiation') && has('electric')) fusion = { name: 'ION STORM', damage: 5, shock: 1, rad: 1, color: '#ffe14a' };
    else if (has('fire') && has('frost')) fusion = { name: 'THERMAL SHOCK', damage: 6, burn: 1, color: '#ff7740' };
    else if (has('toxin') && has('electric')) fusion = { name: 'NEUROTOXIN ARC', damage: 3, poison: 1, shock: 1, color: '#8cff3f' };
    if (!fusion) return;
    this.damageEnemy(enemy, fusion.damage);
    this.applyStatus(enemy, fusion);
    this.floatText(800, 240, fusion.name, fusion.color);
    this.fx.push({ x: 1030, y: 420, life: .6, color: fusion.color, kind: 'burst' });
    if (this.powers['Hellfire Pact'] && fusion.burn) this.block += 4 * this.powers['Hellfire Pact'];
  }

  applyStatus(enemy, card) {
    enemy.status = enemy.status || {};
    const tags = card.elementTags || [];
    const scale = (name, amount) => {
      if (!amount) return 0;
      let a = amount;
      if (name === 'Burn' && (this.powers['Demon Reactor'] || this.powers['Hellfire Pact'])) a += (this.powers['Demon Reactor'] || 0) + (this.powers['Hellfire Pact'] || 0);
      if (name === 'Shock' && this.powers['Storm Circuit']) a += this.powers['Storm Circuit'];
      if (name === 'Shock' && this.powers['Voltage Generator']) a += this.powers['Voltage Generator'];
      if (name === 'Frost' && this.powers['Cryo Engine']) a += this.powers['Cryo Engine'];
      if (name === 'Frost' && this.powers['Glacial Aura']) a += this.powers['Glacial Aura'];
      if (name === 'Poison' && this.powers['Venom Injector']) a += this.powers['Venom Injector'];
      if (name === 'Poison' && this.powers['Toxic Decay']) a += this.powers['Toxic Decay'];
      if (name === 'Poison' && this.hasRelic('toxic_injector')) a += 1;
      if (name === 'Rad Mark' && this.powers['Demon Reactor']) a += this.powers['Demon Reactor'];
      if (name === 'Rad Mark' && this.powers['Half-Life']) a += this.powers['Half-Life'];
      return a;
    };
    const apply = (name, amount) => {
      const a = scale(name, amount);
      if (!a) return;
      enemy.status[name] = (enemy.status[name] || 0) + a;
      this.floatText(1090, 500, `${name} +${a}`, this.statusColor(name));
      if (name === 'Burn' && this.powers['Hellfire Pact']) {
        const b = 4 * this.powers['Hellfire Pact'];
        this.block += b;
        this.floatText(300, 680, `+${b} PACT BLOCK`, '#ff7740');
      }
    };
    apply('Poison', card.poison);
    apply('Shock', card.shock);
    apply('Frost', card.frost);
    apply('Burn', card.burn);
    apply('Rad Mark', card.rad);
    apply('Soaked', card.soaked);
    apply('Vulnerable', card.vulnerable);
    apply('Weak', card.weak);
  }

  endTurn() {
    if (this.state !== 'combat' || this.turn !== 'player') return;
    this.turn = 'enemy';
    let total = 0;
    if (this.playerStatus?.Poison) {
      const p = this.playerStatus.Poison;
      this.losePlayerHp(p, `Poison -${p}`, '#8cff3f');
      this.playerStatus.Poison = Math.max(0, p - 1);
      if (this.player.hp <= 0) { this.state = 'gameover'; return; }
    }
    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      if (e.status?.Poison) { e.hp -= e.status.Poison; this.floatText(1050, 445, `Poison -${e.status.Poison}`, '#8cff3f'); }
      if (e.status?.Burn) { e.hp -= e.status.Burn; this.floatText(1050, 475, `Burn -${e.status.Burn}`, '#ff7740'); e.status.Burn = Math.max(0, e.status.Burn - 1); }
      if (e.status?.['Rad Mark']) { e.hp -= Math.ceil(e.status['Rad Mark'] / 2); this.floatText(1050, 505, `Rad -${Math.ceil(e.status['Rad Mark'] / 2)}`, '#cfff42'); }
      if (e.hp <= 0) continue;
      const frozen = (e.status?.Frost || 0) > 0 || (e.status?.Frostbite || 0) > 0;
      if (frozen) {
        if ((e.status?.Frostbite || 0) > 0) e.status.Frostbite -= 1;
        else e.status.Frost -= 1;
        this.floatText(1050, 535, 'FROZEN', '#80dfff');
        e.intentPlan = this.rollEnemyIntent(e, this.currentNodeType);
        continue;
      }
      const intent = e.intentPlan || this.rollEnemyIntent(e, this.currentNodeType);
      if (intent.type === 'attack' || intent.type === 'attackDebuff') {
        let dmg = intent.value || e.damage || 0;
        if (e.status?.Weak) dmg = Math.ceil(dmg * 0.70);
        if (this.playerStatus?.Weak) dmg = Math.ceil(dmg * 1.20);
        total += dmg;
        if (intent.weak) this.playerStatus.Weak = (this.playerStatus.Weak || 0) + intent.weak;
      } else if (intent.type === 'poison') {
        total += intent.value || 0;
        this.playerStatus.Poison = (this.playerStatus.Poison || 0) + (intent.poison || 1);
        this.floatText(270, 480, `Poison +${intent.poison || 1}`, '#8cff3f');
      } else if (intent.type === 'shield') {
        e.block = (e.block || 0) + (intent.value || 8);
        this.floatText(1000, 470, `+${intent.value || 8} BLOCK`, e.color);
      } else if (intent.type === 'buff') {
        e.damage = (e.damage || 0) + (intent.value || 2);
        e.block = (e.block || 0) + 5;
        this.floatText(1000, 470, `BUFF +${intent.value || 2}`, e.color);
      } else if (intent.type === 'debuff') {
        this.playerStatus.Weak = (this.playerStatus.Weak || 0) + (intent.value || 1);
        this.floatText(270, 480, `WEAK +${intent.value || 1}`, '#b164ff');
      }
      if (e.status?.Shock) e.status.Shock = Math.max(0, e.status.Shock - 1);
      if (e.status?.Vulnerable) e.status.Vulnerable = Math.max(0, e.status.Vulnerable - 1);
      if (e.status?.Weak) e.status.Weak = Math.max(0, e.status.Weak - 1);
      if (e.status?.Soaked) e.status.Soaked = Math.max(0, e.status.Soaked - 1);
      e.intentPlan = this.rollEnemyIntent(e, this.currentNodeType);
    }
    this.applyIncomingDamage(total);
    if (this.playerStatus?.Weak) this.playerStatus.Weak = Math.max(0, this.playerStatus.Weak - 1);
    if (this.player.hp <= 0) { this.state = 'gameover'; return; }
    if (this.enemies.every(e => e.hp <= 0)) { this.winCombat(); return; }
    this.hand.forEach(id => this.discard.push(id));
    this.hand = [];
    this.energy = this.maxEnergy + (this.hasRelic('neural_shard') ? 1 : 0);
    this.block = this.hasRelic('ghost_firewall') ? 4 : 0;
    this.elementMemory = new Set();
    this.turn = 'player';
    this.resetTurnRelics();
    this.drawCards(5);
    this.save();
  }

  winCombat() {
    const bonus = this.currentNodeType === 'boss' ? 60 : this.currentNodeType === 'secret' ? 55 : this.currentNodeType === 'elite' ? 40 : 25;
    const eliteBonus = this.hasRelic('cultist_token') && this.currentNodeType === 'elite' ? 15 : 0;
    const legacyBonus = this.hasRelic('protocol_crown') && ['elite','boss','secret'].includes(this.currentNodeType) ? 15 : 0;
    this.credits += bonus + this.node * 3 + eliteBonus + legacyBonus;
    if (eliteBonus) this.floatText(820, 245, 'CULTIST TOKEN +15 CREDITS', RELIC_DB.cultist_token.color);
    if (['elite', 'boss', 'secret'].includes(this.currentNodeType)) {
      this.openRelicReward('combat', this.currentNodeType === 'elite' ? 'standard' : 'strong');
      return;
    }
    this.rewardCards = shuffle(this.cardRewardPool()).slice(0, 3);
    this.state = 'reward';
    this.save();
  }

  completeCurrentNode() {
    const active = this.activeMapNode;
    if (active && !this.completedNodes.includes(active.id)) this.completedNodes.push(active.id);
    if (active?.next?.length) {
      this.currentLayer = Math.min(this.currentLayer + 1, MAP_LAYERS.length - 1);
      this.availableNodes = [...active.next];
    } else {
      this.currentLayer = MAP_LAYERS.length;
      this.availableNodes = [];
    }
    this.node = this.completedNodes.length;
    this.activeMapNode = null;
  }

  takeReward(id) {
    if (id && CARD_DB[id]) this.deck.push(id);
    this.completeCurrentNode();
    if (this.currentLayer >= MAP_LAYERS.length) this.state = 'victory';
    else this.state = 'map';
    this.save();
  }

  enterNode(type = null, node = null) {
    const chosen = node || this.getNodeById(this.availableNodes[0]);
    if (chosen) this.activeMapNode = chosen;
    const nodeType = type || chosen?.type || 'battle';
    this.currentNodeType = nodeType;
    if (nodeType === 'shop') this.openShop();
    else if (nodeType === 'rest') this.state = 'rest';
    else if (nodeType === 'treasure') this.openRelicReward('treasure', 'standard');
    else if (nodeType === 'event') this.resolveEventNode();
    else this.startCombat(nodeType);
  }

  resolveEventNode() {
    const roll = (this.node + this.deck.length) % 3;
    if (roll === 0) {
      this.credits += 35;
      this.message = 'Data cache cracked: +35 credits.';
    } else if (roll === 1) {
      this.deck.push(choose(this.cardRewardPool()));
      this.message = 'Blacknet packet found: card added.';
    } else {
      this.player.hp = clamp(this.player.hp + 12, 1, this.player.maxHp);
      this.message = 'Emergency med-stream: +12 HP.';
    }
    this.completeCurrentNode();
    this.state = 'map';
    this.save();
  }

  getNodeById(id) {
    return MAP_NODES.find(n => n.id === id) || null;
  }

  openShop() {
    this.shopCards = shuffle(this.cardRewardPool()).slice(0, 5).map((id, i) => ({ id, price: this.cardPrice(CARD_DB[id], i), sold: false }));
    this.shopRelics = shuffle(RELIC_IDS.filter(id => !this.relics.includes(id) && !RELIC_DB[id]?.starting)).slice(0, 3).map(id => ({ id, sold: false, price: RELIC_DB[id].price }));
    this.shopUtilities = ['nano_repair', 'system_purge', 'energy_refill', 'remove_card'].map(id => ({ id, sold: false, price: UTILITY_DB[id].price }));
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

  buyRelic(slot) {
    if (!slot || slot.sold || this.credits < slot.price || this.relics.includes(slot.id) || !RELIC_DB[slot.id]) return;
    this.credits -= slot.price;
    this.addRelic(slot.id, false);
    slot.sold = true;
    this.floatText(800, 780, `${RELIC_DB[slot.id].name} BOUGHT`, RELIC_DB[slot.id].color);
    this.save();
  }

  buyUtility(slot) {
    if (slot.sold || this.credits < slot.price) return;
    const id = slot.id;
    if (id === 'remove_card') { this.state = 'remove'; return; }
    this.credits -= slot.price;
    if (id === 'nano_repair') this.player.hp = clamp(this.player.hp + 20, 1, this.player.maxHp);
    if (id === 'system_purge') this.playerStatus = {};
    if (id === 'energy_refill') this.maxEnergy += 1;
    slot.sold = true;
    this.floatText(800, 780, `${UTILITY_DB[id].name} USED`, UTILITY_DB[id].color);
    this.save();
  }

  refreshShop() {
    const price = 25;
    if (this.credits < price) return;
    this.credits -= price;
    this.openShop();
    this.floatText(800, 820, 'SHOP REFRESHED', '#54f8ff');
    this.save();
  }

  removeDeckCard(index) {
    if (index < 0 || index >= this.deck.length || this.credits < UTILITY_DB.remove_card.price) return;
    const [removed] = this.deck.splice(index, 1);
    this.credits -= UTILITY_DB.remove_card.price;
    this.floatText(800, 820, `${CARD_DB[removed]?.title || removed} REMOVED`, '#ff4df0');
    this.state = 'shop';
    this.save();
  }

  healRest() {
    this.player.hp = clamp(this.player.hp + Math.ceil(this.player.maxHp * .3), 1, this.player.maxHp);
    this.completeCurrentNode();
    this.state = this.currentLayer >= MAP_LAYERS.length ? 'victory' : 'map';
    this.save();
  }

  upgradeRest() {
    this.deck.push('plasma_cut');
    this.completeCurrentNode();
    this.state = this.currentLayer >= MAP_LAYERS.length ? 'victory' : 'map';
    this.save();
  }

  leaveShop() {
    this.completeCurrentNode();
    this.state = this.currentLayer >= MAP_LAYERS.length ? 'victory' : 'map';
    this.save();
  }

  floatText(x, y, text, color) {
    this.fx.push({ x, y, text, color, life: 1, kind: 'text' });
  }

  statusColor(name) {
    return { Poison: '#8cff3f', Shock: '#ffe14a', Frost: '#80dfff', Frostbite: '#80dfff', Burn: '#ff7740', 'Rad Mark': '#cfff42', Soaked: '#5fd7ff', Vulnerable: '#ffb86a', Weak: '#b164ff' }[name] || '#fff';
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
        case 'relicReward': this.takeRelicReward(button.data.id); return;
        case 'skipRelicReward': this.takeRelicReward(null); return;
        case 'skipReward': this.takeReward(null); return;
        case 'node': this.enterNode(button.data.type, button.data.node); return;
        case 'enemyTarget': this.selectedTargetIndex = button.data.index; return;
        case 'shopCard': this.buyCard(button.data.slot); return;
        case 'shopRelic': this.buyRelic(button.data.slot); return;
        case 'shopUtility': this.buyUtility(button.data.slot); return;
        case 'refreshShop': this.refreshShop(); return;
        case 'leaveShop': this.leaveShop(); return;
        case 'removeCard': this.removeDeckCard(button.data.index); return;
        case 'backShop': this.state = 'shop'; return;
        case 'restHeal': this.healRest(); return;
        case 'restUpgrade': this.upgradeRest(); return;
        case 'selectCharacter': this.selectedCharacterIndex = button.data.index; this.newRun(); return;
        default: return;
      }
    }
    if (this.state === 'combat') {
      for (const button of this.buttons) {
        if (button.id === 'enemyTarget' && button.contains(x, y)) { this.selectedTargetIndex = button.data.index; return; }
      }
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
    else if (this.state === 'relicReward') this.drawRelicReward(ctx);
    else if (this.state === 'map') this.drawMap(ctx);
    else if (this.state === 'shop') this.drawShop(ctx);
    else if (this.state === 'rest') this.drawRest(ctx);
    else if (this.state === 'remove') this.drawRemove(ctx);
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
      ctx.fillText(`Node ${Math.min(this.currentLayer + 1, MAP_LAYERS.length)}/${MAP_LAYERS.length}`, 835, 57);
      ctx.fillStyle = '#ff4df0';
      ctx.fillText(`Deck ${this.deck.length}`, 1010, 57);
      ctx.fillStyle = '#ffd86a';
      ctx.fillText(`Relics ${this.relics.length}`, 1150, 57);
      this.drawRelicTray(ctx, 1265, 41);
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
    const bob = Math.sin(this.time * 2.0) * 4;
    this.shadow(ctx, 250, 698, 196, 34, ch.color);
    if (img) {
      ctx.save();
      ctx.shadowColor = ch.color;
      ctx.shadowBlur = 16;
      drawContain(ctx, img, 98, 292 + bob, 304, 396);
      ctx.restore();
    } else {
      this.fallbackUnit(ctx, 250, 535 + bob, ch.color, 'HERO');
    }
    this.hpBar(ctx, 145, 707, 210, 16, this.player.hp, this.player.maxHp, '#ff4767');
    if (this.block > 0) this.badge(ctx, 386, 709, this.block, '#54f8ff');
    this.drawPowerBadges(ctx, 150, 748);
  }

  drawEnemies(ctx) {
    const alive = this.enemies.filter(e => e.hp > 0);
    const layouts = {
      1: [1125],
      2: [875, 1225],
      3: [775, 1065, 1355]
    };
    const xs = layouts[alive.length] || layouts[3];
    alive.forEach((e, i) => {
      const x = xs[i];
      const spriteTop = i % 2 ? 300 : 318;
      const spriteW = e.id === 'toxic_drone_hound' ? 210 : 200;
      const spriteH = e.id === 'toxic_drone_hound' ? 250 : 275;
      const img = this.assets.get(e.art);
      const uiY = spriteTop - 136;
      const targetW = spriteW + 34;
      this.shadow(ctx, x, 696, 142, 30, e.color);
      const enemyIndex = this.enemies.indexOf(e);
      this.buttons.push(new Button('enemyTarget', x - targetW / 2, spriteTop - 16, targetW, spriteH + 34, e.name, { index: enemyIndex }, e.color));
      if (enemyIndex === this.selectedTargetIndex) {
        ctx.save();
        ctx.shadowColor = '#ffd86a';
        ctx.shadowBlur = 22;
        roundRect(ctx, x - targetW / 2, spriteTop - 18, targetW, spriteH + 38, 20);
        ctx.strokeStyle = '#ffd86a';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
      }
      ctx.fillStyle = '#fff';
      ctx.font = '900 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(e.name, x, uiY);
      this.panel(ctx, x - 86, uiY + 11, 172, 42, e.color, .74);
      ctx.fillStyle = e.color;
      ctx.font = '900 13px system-ui';
      const intent = e.intentPlan || { label: e.intent, value: e.damage };
      const intentText = intent.type === 'shield' ? `${intent.label} +${intent.value} Block` : intent.type === 'buff' ? `${intent.label} Buff` : intent.type === 'debuff' ? `${intent.label} Weak` : `${intent.label} ${intent.value || ''}`;
      ctx.fillText(`Intent: ${intentText}`, x, uiY + 38, 154);
      this.hpBar(ctx, x - 86, uiY + 64, 172, 8, e.hp, e.maxHp, '#ff4767', false);
      if (e.block > 0) this.badge(ctx, x + 104, uiY + 66, e.block, '#54f8ff', 24);
      this.drawStatuses(ctx, e, x, uiY + 96);
      if (img) {
        ctx.save();
        ctx.shadowColor = e.color;
        ctx.shadowBlur = 14;
        drawContain(ctx, img, x - spriteW / 2, spriteTop, spriteW, spriteH);
        ctx.restore();
      } else {
        this.fallbackUnit(ctx, x, 535, e.color, 'ENEMY');
      }
    });
  }

  drawPowerBadges(ctx, x, y) {
    const entries = Object.entries(this.powers || {}).filter(([, v]) => v > 0);
    entries.slice(0, 5).forEach(([name, value], i) => {
      const bx = x + i * 104;
      this.panel(ctx, bx, y, 94, 28, '#ffd86a', .58);
      ctx.fillStyle = '#ffd86a';
      ctx.font = '800 11px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${name.split(' ')[0]} ${value}`, bx + 47, y + 14, 86);
    });
  }

  drawRelicTray(ctx, x, y) {
    const ids = this.relics.slice(0, 8);
    ids.forEach((id, i) => this.drawRelicIcon(ctx, id, x + i * 32, y, 26));
    if (this.relics.length > ids.length) {
      ctx.fillStyle = '#ffd86a';
      ctx.font = '950 12px system-ui';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(`+${this.relics.length - ids.length}`, x + ids.length * 32 + 2, y + 13);
    }
  }

  drawRelicIcon(ctx, id, x, y, size = 32) {
    const relic = this.getRelic(id);
    const img = this.assets?.get?.(relic.art || `relic_${id}`);
    ctx.save();
    ctx.shadowColor = relic.color;
    ctx.shadowBlur = size > 40 ? 16 : 8;
    roundRect(ctx, x, y, size, size, Math.max(6, size * .18));
    ctx.fillStyle = 'rgba(2,9,18,.92)';
    ctx.fill();
    ctx.strokeStyle = relic.color;
    ctx.lineWidth = size > 40 ? 2 : 1.2;
    ctx.stroke();
    if (img) {
      ctx.save();
      roundRect(ctx, x + 3, y + 3, size - 6, size - 6, Math.max(5, size * .15));
      ctx.clip();
      drawContain(ctx, img, x + 4, y + 4, size - 8, size - 8);
      ctx.restore();
    } else {
      ctx.shadowBlur = 0;
      ctx.fillStyle = relic.color;
      ctx.font = `950 ${Math.max(9, Math.round(size * .34))}px system-ui`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const initials = relic.name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
      ctx.fillText(initials || '?', x + size / 2, y + size / 2);
    }
    ctx.restore();
  }

  drawCombatUi(ctx) {
    this.panel(ctx, 34, 776, 1532, 98, '#54f8ff', .52);
    this.energyOrb(ctx, 92, 828, 48);
    this.pile(ctx, 170, 796, 'DRAW', this.drawPile.length, '#54f8ff');
    this.pile(ctx, 1360, 796, 'DISCARD', this.discard.length, '#ff4df0');
    this.button(ctx, 'endTurn', 1466, 806, 88, 58, 'END\nTURN', '#ffd86a');
    const cardW = 150;
    const cardH = 205;
    const gap = 13;
    const total = this.hand.length * cardW + Math.max(0, this.hand.length - 1) * gap;
    const start = W / 2 - total / 2;
    this.hand.forEach((id, i) => {
      const x = start + i * (cardW + gap);
      const yBase = 674;
      const hot = this.mouse.x >= x && this.mouse.x <= x + cardW && this.mouse.y >= yBase - 30 && this.mouse.y <= yBase + cardH;
      const y = hot ? yBase - 24 : yBase;
      const card = CARD_DB[id];
      const cost = this.cardCost(card);
      this.drawCard(ctx, id, x, y, cardW, cardH, this.energy >= cost, hot, cost);
      this.cardRects.push({ index: i, x, y, w: cardW, h: cardH });
    });
  }

  drawCard(ctx, id, x, y, w, h, playable = true, hot = false, displayCost = null) {
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
    ctx.fillText(displayCost ?? card.cost, x + 27, y + 27);
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

  drawRelicReward(ctx) {
    const strong = this.relicRewardStrength === 'strong';
    this.drawBackground(ctx, strong ? 'combat_toxic_factory' : 'map_data_vault', 'RELIC');
    this.drawTopHud(ctx);
    ctx.fillStyle = strong ? '#ffd86a' : '#54f8ff';
    ctx.font = '950 44px system-ui';
    ctx.textAlign = 'center';
    ctx.shadowColor = strong ? '#ffd86a' : '#54f8ff';
    ctx.shadowBlur = 22;
    ctx.fillText(strong ? 'CLAIM A PRIME RELIC' : 'CHOOSE A RELIC', W / 2, 145);
    ctx.shadowBlur = 0;
    const choices = this.rewardRelics.filter(id => RELIC_DB[id] && !this.relics.includes(id));
    if (!choices.length) {
      ctx.fillStyle = '#e8fdff';
      ctx.font = '900 24px system-ui';
      ctx.fillText('No new relic protocols available.', W / 2, 335);
      this.button(ctx, 'skipRelicReward', 675, 430, 250, 64, 'CONTINUE', '#54f8ff');
      return;
    }
    const cardW = choices.length >= 4 ? 245 : 270;
    const cardH = 315;
    const gap = choices.length >= 4 ? 26 : 40;
    const total = choices.length * cardW + Math.max(0, choices.length - 1) * gap;
    const start = W / 2 - total / 2;
    choices.forEach((id, i) => {
      const x = start + i * (cardW + gap);
      const y = 250;
      const hot = this.mouse.x >= x && this.mouse.x <= x + cardW && this.mouse.y >= y && this.mouse.y <= y + cardH;
      this.drawRelicChoice(ctx, id, x, hot ? y - 14 : y, cardW, cardH, hot);
      this.buttons.push(new Button('relicReward', x, y - 18, cardW, cardH + 30, id, { id }, RELIC_DB[id].color));
    });
  }

  drawRelicChoice(ctx, id, x, y, w, h, hot = false) {
    const relic = this.getRelic(id);
    ctx.save();
    ctx.shadowColor = relic.color;
    ctx.shadowBlur = hot ? 30 : 14;
    roundRect(ctx, x, y, w, h, 18);
    ctx.fillStyle = 'rgba(3,9,18,.92)';
    ctx.fill();
    ctx.strokeStyle = relic.color;
    ctx.lineWidth = hot ? 3 : 1.6;
    ctx.stroke();
    this.drawRelicIcon(ctx, id, x + w / 2 - 46, y + 34, 92);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#fff';
    ctx.font = '950 20px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(relic.name, x + w / 2, y + 158, w - 28);
    ctx.fillStyle = relic.color;
    ctx.font = '950 13px system-ui';
    ctx.fillText((relic.tier || 'legacy').toUpperCase(), x + w / 2, y + 188);
    ctx.fillStyle = '#e8fdff';
    ctx.font = '800 14px system-ui';
    this.wrapText(ctx, relic.text, x + w / 2, y + 226, w - 34, 19, 4);
    ctx.restore();
  }

  drawMap(ctx) {
    this.drawBackground(ctx, 'map_data_vault', 'MAP');
    this.drawTopHud(ctx);
    ctx.fillStyle = '#e8fdff';
    ctx.font = '950 38px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('SECTOR 7 // DATA-VAULT ROUTE', 58, 136);
    const nodeById = Object.fromEntries(MAP_NODES.map(n => [n.id, n]));
    ctx.save();
    ctx.lineWidth = 4;
    for (const n of MAP_NODES) {
      for (const nextId of n.next || []) {
        const to = nodeById[nextId];
        if (!to) continue;
        const activeLine = this.completedNodes.includes(n.id) || this.availableNodes.includes(n.id);
        ctx.strokeStyle = activeLine ? 'rgba(84,248,255,.62)' : 'rgba(84,248,255,.20)';
        ctx.shadowColor = activeLine ? '#54f8ff' : 'transparent';
        ctx.shadowBlur = activeLine ? 12 : 0;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        const mx = (n.x + to.x) / 2;
        ctx.bezierCurveTo(mx, n.y, mx, to.y, to.x, to.y);
        ctx.stroke();
      }
    }
    ctx.restore();
    MAP_NODES.forEach(p => this.drawNode(ctx, p));
    this.panel(ctx, 1260, 130, 260, 150, '#54f8ff', .42);
    ctx.fillStyle = '#aefcff';
    ctx.font = '900 16px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Choose any glowing node.', 1390, 170);
    ctx.fillText(this.hasRelic('glitch_lens') ? 'Glitch Lens: secret route pinged.' : 'Secret boss nodes are optional.', 1390, 205);
    ctx.fillStyle = '#ffd86a';
    ctx.fillText(`${this.credits} run credits`, 1390, 240);
    this.button(ctx, 'menu', 1330, 812, 210, 54, 'MENU', '#54f8ff');
  }

  drawNode(ctx, p) {
    const color = p.type === 'boss' ? '#ff315e' : p.type === 'secret' ? '#ff4df0' : p.type === 'shop' ? '#ffd86a' : p.type === 'treasure' ? '#ffd86a' : p.type === 'rest' ? '#8cff3f' : p.type === 'elite' ? '#ff4df0' : p.type === 'event' ? '#80dfff' : '#54f8ff';
    const active = this.availableNodes.includes(p.id);
    const done = this.completedNodes.includes(p.id);
    const locked = !active && !done;
    const lensHint = p.type === 'secret' && this.hasRelic('glitch_lens') && !done;
    const icon = { battle: '⚔', elite: '☠', rest: '✚', shop: '◈', treasure: 'R', event: '?', boss: '☢', secret: '☣' }[p.type] || '?';
    ctx.save();
    ctx.globalAlpha = done ? .42 : locked && !lensHint ? .34 : 1;
    ctx.shadowColor = color;
    ctx.shadowBlur = active ? 30 : lensHint ? 24 : 12;
    roundRect(ctx, p.x - 44, p.y - 44, 88, 88, 22);
    ctx.fillStyle = 'rgba(3,8,18,.88)';
    ctx.fill();
    ctx.strokeStyle = lensHint && !active ? '#ffd86a' : color;
    ctx.lineWidth = active || lensHint ? 4 : 2;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.font = '950 31px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(done ? '✓' : icon, p.x, p.y - 2);
    ctx.fillStyle = '#fff';
    ctx.font = '950 12px system-ui';
    ctx.fillText(lensHint && !active ? 'PING' : p.type === 'secret' ? 'SECRET' : p.type.toUpperCase(), p.x, p.y + 63);
    ctx.restore();
    if (active) this.buttons.push(new Button('node', p.x - 56, p.y - 56, 112, 132, p.type, { type: p.type, node: p }, color));
  }

  drawShop(ctx) {
    this.drawBackground(ctx, 'shop_blacknet_market', 'SHOP');
    ctx.fillStyle = '#ff4df0';
    ctx.font = '950 46px system-ui';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#ff4df0';
    ctx.shadowBlur = 22;
    ctx.fillText('BLACKNET MARKET', W / 2, 76);
    ctx.shadowBlur = 0;
    this.panel(ctx, 38, 34, 250, 58, '#ffd86a', .72);
    ctx.fillStyle = '#ffd86a';
    ctx.font = '950 23px system-ui';
    ctx.fillText(`${this.credits} CREDITS`, 163, 66);

    ctx.fillStyle = '#aefcff';
    ctx.font = '950 20px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('CARDS', 160, 132);
    this.shopCards.forEach((slot, i) => {
      const x = 135 + i * 205;
      const y = 150;
      this.drawCard(ctx, slot.id, x, y, 140, 188, !slot.sold, false);
      this.priceTag(ctx, x + 70, y + 220, slot.sold ? 'SOLD' : slot.price, slot.sold ? '#888' : '#ffd86a');
      if (!slot.sold) this.buttons.push(new Button('shopCard', x, y, 140, 232, slot.id, { slot }, '#ffd86a'));
    });

    this.panel(ctx, 90, 430, 1420, 285, '#54f8ff', .62);
    ctx.fillStyle = '#aefcff';
    ctx.font = '950 20px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('RELICS / PROTOCOL CHIPS', 130, 470);
    this.shopRelics.forEach((slot, i) => {
      const relic = RELIC_DB[slot.id];
      const x = 130 + i * 255;
      this.shopItem(ctx, x, 500, 210, 130, relic.name, relic.text, slot.price, relic.color, slot.sold);
      if (!slot.sold) this.buttons.push(new Button('shopRelic', x, 500, 210, 150, relic.name, { slot }, relic.color));
    });

    ctx.fillStyle = '#aefcff';
    ctx.font = '950 20px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('UTILITIES / SERVICES', 900, 470);
    this.shopUtilities.forEach((slot, i) => {
      const item = UTILITY_DB[slot.id];
      const x = 900 + (i % 2) * 245;
      const y = 500 + Math.floor(i / 2) * 125;
      this.shopItem(ctx, x, y, 210, 96, item.name, item.text, slot.price, item.color, slot.sold);
      if (!slot.sold || slot.id === 'remove_card') this.buttons.push(new Button('shopUtility', x, y, 210, 108, item.name, { slot }, item.color));
    });

    this.button(ctx, 'refreshShop', 1030, 785, 220, 58, 'REFRESH 25', '#ffd86a');
    this.button(ctx, 'leaveShop', 1280, 785, 220, 58, 'LEAVE SHOP', '#54f8ff');
  }

  shopItem(ctx, x, y, w, h, title, text, price, color, sold = false) {
    this.panel(ctx, x, y, w, h, sold ? '#777' : color, .64);
    ctx.save();
    ctx.globalAlpha = sold ? .45 : 1;
    ctx.fillStyle = '#fff';
    ctx.font = '950 16px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(title, x + w / 2, y + 28, w - 16);
    ctx.fillStyle = '#dff';
    ctx.font = '800 12px system-ui';
    this.wrapText(ctx, text, x + w / 2, y + 57, w - 18, 15, 2);
    this.priceTag(ctx, x + w / 2, y + h - 16, sold ? 'SOLD' : price, sold ? '#888' : '#ffd86a');
    ctx.restore();
  }

  priceTag(ctx, x, y, value, color) {
    ctx.fillStyle = color;
    ctx.font = '950 18px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(typeof value === 'number' ? `◈ ${value}` : String(value), x, y);
  }

  drawRemove(ctx) {
    this.drawBackground(ctx, 'shop_blacknet_market', 'REMOVE');
    ctx.fillStyle = '#ff4df0';
    ctx.font = '950 42px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('REMOVE ONE CARD', W / 2, 90);
    ctx.fillStyle = '#ffd86a';
    ctx.font = '900 20px system-ui';
    ctx.fillText(`Cost: ${UTILITY_DB.remove_card.price} credits`, W / 2, 128);
    const cardW = 150, cardH = 205, gap = 22;
    const cols = 6;
    this.deck.forEach((id, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const x = 210 + col * (cardW + gap);
      const y = 165 + row * 238;
      this.drawCard(ctx, id, x, y, cardW, cardH, this.credits >= UTILITY_DB.remove_card.price, false);
      this.buttons.push(new Button('removeCard', x, y, cardW, cardH, id, { index: i }, '#ff4df0'));
    });
    this.button(ctx, 'backShop', 675, 815, 250, 56, 'BACK TO SHOP', '#54f8ff');
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
    if (card.element === 'water') return '#5fd7ff';
    if (card.element === 'radiation') return '#cfff42';
    if (card.element === 'shield') return '#54f8ff';
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

  badge(ctx, x, y, value, color, radius = 32) {
    ctx.save();
    ctx.shadowColor = color;
    ctx.shadowBlur = radius > 28 ? 18 : 14;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#04121c';
    ctx.font = `950 ${radius > 28 ? 20 : 16}px system-ui`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(value, x, y);
    ctx.restore();
  }

  pile(ctx, x, y, label, n, color) {
    this.panel(ctx, x, y, 102, 70, color, .60);
    ctx.fillStyle = '#fff';
    ctx.font = '950 13px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x + 51, y + 21);
    ctx.font = '950 24px system-ui';
    ctx.fillText(n, x + 51, y + 50);
  }

  energyOrb(ctx, x, y, radius = 55) {
    ctx.save();
    ctx.shadowColor = '#54f8ff';
    ctx.shadowBlur = 22;
    ctx.fillStyle = 'rgba(0,45,70,.96)';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#54f8ff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `950 ${Math.round(radius * .62)}px system-ui`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${this.energy}/${this.maxEnergy}`, x, y - radius * .08);
    ctx.font = `950 ${Math.round(radius * .24)}px system-ui`;
    ctx.fillText('ENERGY', x, y + radius * .65);
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
