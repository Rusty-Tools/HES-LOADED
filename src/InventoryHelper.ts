import * as PIXI from "pixi.js";
import { Inventory } from "./Inventory";
import { Slot } from "./Slot";

const shift = -200;

const armorX = 72;
const armorY = 832 + shift;
const armorSize = 81;

const mainX = 655;
const mainY = 573 + shift;
const mainSize = 96;

const hotbarX = 656;
const hotbarY = 963 + shift;

const lootX = 1252;
const lootY = 291 + shift;
const lootSize = 93;

const lootArmorX = 1258;
const lootArmorY = 706 + shift;
const lootArmorSize = 78;

const lootHotbarX = 1252;
const lootHotbarY = 828 + shift;

export function generateInventory(stage: PIXI.Container, inv: Inventory) {
  let id = 0

  // armor slots
    for (let i = 0; i < 7; i++) {
      const s = new Slot(
        armorX + armorSize * i,
        armorY,
        armorSize,
        id++,
        inv
      );
      inv.slots.push(s);
    }

    // main inventory
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 6; x++) {
        const s = new Slot(
          mainX + mainSize * x,
          mainY + mainSize * y,
          mainSize,
          id++,
          inv
        );
        inv.slots.push(s);
      }
    }

    // hotbar
    for (let i = 0; i < 6; i++) {
      const s = new Slot(
        hotbarX + mainSize * i,
        hotbarY,
        mainSize,
        id++,
        inv
      );
      inv.slots.push(s);
    }

    // loot armor slots
    for (let i = 0; i < 7; i++) {
      const s = new Slot(
        lootArmorX + lootArmorSize * i,
        lootArmorY,
        lootArmorSize,
        id++,
        inv
      );
      inv.slots.push(s);
    }

    // loot main inventory
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 6; x++) {
        const s = new Slot(
          lootX + lootSize * x,
          lootY + lootSize * y,
          lootSize,
          id++,
          inv
        );
        inv.slots.push(s);
      }
    }

    // loot hotbar
    for (let i = 0; i < 6; i++) {
      const s = new Slot(
        lootHotbarX + lootSize * i,
        lootHotbarY,
        lootSize,
        id++,
        inv
      );
      inv.slots.push(s);
    }
}

export function createBar(y: number, texture: PIXI.Texture) {
    var box = new PIXI.Sprite(texture);
    box.x = 1243;
    box.y = y;
    box.width = 570;
    box.height = 32;
    box.alpha = 0.6;
    return box;
  }