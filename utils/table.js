import { Table } from "console-table-printer";

export class Tables {
  static generate(dice, probabilities) {
    console.log("Dice Probabilities (Rows vs Column):");
    const tableColumns = dice.map((_, i) => `D${i}`);
    const p = new Table();
    p.addColumn({ name: " " });
    p.addColumns(tableColumns);
    const r =  (i) => i.map((p)=>(p === 0 ? "-" : `${(p * 100).toFixed(1)}%`))

    const rows = probabilities.forEach((row, i) => r(row));
    /*const result =`D${i}` row(p === 0 ? "-" : `${(p * 100).toFixed(1)}%`)
      .map((p) => (p === 0 ? "-" : `${(p * 100).toFixed(1)}%`))
      .join("  ");*/

    console.log('Требуется доработать');

    p.printTable();
  }
}
