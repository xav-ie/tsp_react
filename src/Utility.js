Math.createVector = (x, y) => ({ x: x, y: y });
Math.dist = (u, v) => (Math.sqrt(Math.pow(u.x - v.x, 2) + Math.pow(u.y - v.y, 2)));



let fileContents = `!! n20w20.001    16.75 391


CUST NO.   XCOORD.   YCOORD.    DEMAND   READY TIME   DUE DATE   SERVICE TIME


    1      16.00      23.00       0.00       0.00     408.00       0.00
    2      22.00       4.00       0.00      62.00      68.00       0.00
    3      12.00       6.00       0.00     181.00     205.00       0.00
    4      47.00      38.00       0.00     306.00     324.00       0.00
    5      11.00      29.00       0.00     214.00     217.00       0.00
    6      25.00       5.00       0.00      51.00      61.00       0.00
    7      22.00      31.00       0.00     102.00     129.00       0.00
    8       0.00      16.00       0.00     175.00     186.00       0.00
    9      37.00       3.00       0.00     250.00     263.00       0.00
   10      31.00      19.00       0.00       3.00      23.00       0.00
   11      38.00      12.00       0.00      21.00      49.00       0.00
   12      36.00       1.00       0.00      79.00      90.00       0.00
   13      38.00      14.00       0.00      78.00      96.00       0.00
   14       4.00      50.00       0.00     140.00     154.00       0.00
   15       5.00       4.00       0.00     354.00     386.00       0.00
   16      16.00       3.00       0.00      42.00      63.00       0.00
   17      25.00      25.00       0.00       2.00      13.00       0.00
   18      31.00      15.00       0.00      24.00      42.00       0.00
   19      36.00      14.00       0.00      20.00      33.00       0.00
   20      28.00      16.00       0.00       9.00      21.00       0.00
   21      20.00      35.00       0.00     275.00     300.00       0.00
  999       0.00       0.00       0.00       0.00       0.00       0.00
`;

class Utility {
  static test() {
    console.log(fileContents);
  }
  static readFile() {
    this.lines = fileContents.split("\n");
    return this.lines;
  }
  static parseInfo() {
    this.readFile();
    let splitLines = this.lines.map((line) => line.split(" "));
    splitLines = splitLines
      .map((line) => line.filter((n) => n !== ""))
      .filter((line) => line.length !== 0)
      .splice(2, splitLines.length - 8);
    this.cityInfo = splitLines;
    return this.cityInfo;
  }
  


  
}


export default Utility;