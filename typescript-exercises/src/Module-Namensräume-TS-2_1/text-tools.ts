console.clear();

namespace TextTools {
  export let toUpperCase = (text: string) => {
    return text.toUpperCase();
  };

  export let reverse = (text: string) => {
    return text.split("").reverse().join("");
  };

  export const randomText = "Das ist eine Konstante";
}

export { TextTools };
