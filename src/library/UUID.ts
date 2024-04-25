class UUID {
  static generate(): string {
    const randomHex = (len: number): string => {
      let output = "";
      const characters = "0123456789ABCDEF";
      for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        output += characters.charAt(randomIndex);
      }
      return output;
    };

    return `${randomHex(8)}-${randomHex(4)}-${randomHex(4)}-${randomHex(
      4
    )}-${randomHex(12)}`;
  }
}

export default UUID;
