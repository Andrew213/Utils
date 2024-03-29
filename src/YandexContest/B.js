/**
 * Раунд плей-офф между двумя командами состоит из двух матчей. Каждая команда проводит по одному матчу «дома» и «в гостях». В
 * ыигрывает команда, забившая большее число мячей. Если же число забитых мячей совпадает, выигрывает команд, забившая больше мячей «в гостях».
 * Если и это число мячей совпадает, матч переходит в дополнительный тайм или серию пенальти.
 * Вам дан счёт первого матча, а также счёт текущей игры (которая ещё не завершилась).
 * Помогите комментатору сообщить, сколько голов необходимо забить первой команде, чтобы победить, не переводя игру в дополнительное время.
 *
 * Формат ввода
 *
 * В первой строке записан счёт первого мачта в формате G1:G2, где G1 "— число мячей, забитых первой командой, а G2 "— число мячей, забитых второй командой.
 * Во второй строке записан счёт второго (текущего) матча в аналогичном формате.
 * Все числа в записи счёта не превышают 5.
 * В третьей строке записано число 1, если первую игру первая команда провела «дома», или 2, если «в гостях».
 *
 * Выведите единственное целое число "— необходимое количество мячей
 */

function main({ A1, B1, A2, B2, home }) {
  let totalA = A1 + A2;
  const totalB = B1 + B2;

  // // Выигрыш будет в случае:
  // //1. Общий счет выше
  // //2. Гостевой счёт выше

  if (home === 1) {
    let res = 0;
    const guestsB = B1;
    let guestsA = A2;

    if (totalB >= totalA) {
      res += totalB - totalA;
    }

    guestsA += res;

    if (res === totalB && guestsA <= guestsB) {
      res += 1;
    }

    if (res + totalA === totalB && guestsA <= guestsB) {
      res += 1;
    }

    return res;
  }

  if (home === 2) {
    let res = 0;
    const guestsB = B2;
    let guestsA = A1;

    if (totalB >= totalA) {
      res += totalB - totalA;
    }

    if (res === totalB && guestsA <= guestsB) {
      res += 1;
    }

    if (res + totalA === totalB && guestsA <= guestsB) {
      res += 1;
    }

    return res;
  }
}
//0
// main({ A1: 2, B1: 2, A2: 1, B2: 1, home: 2 });

//1
// main({ A1: 2, B1: 2, A2: 1, B2: 1, home: 1 });

// 1
// main({ A1: 2, B1: 2, A2: 1, B2: 1, home: 1 });

// 6
// main({ A1: 0, B1: 2, A2: 0, B2: 3, home: 2 });

// 6
// main({ A1: 2, B1: 2, A2: 0, B2: 5, home: 2 });

// 0
// main({ A1: 4, B1: 3, A2: 2, B2: 0, home: 1 });

// 1
// main({ A1: 2, B1: 3, A2: 1, B2: 0, home: 1 });

// 0
// main({ A1: 3, B1: 2, A2: 0, B2: 1, home: 2 });

//1
// main({ A1: 1, B1: 0, A2: 2, B2: 3, home: 2 });

//3
// main({ A1: 5, B1: 2, A2: 0, B2: 5, home: 1 });

//1
// main({ A1: 2, B1: 0, A2: 1, B2: 3, home: 2 });

//5
// main({ A1: 0, B1: 2, A2: 0, B2: 3, home: 1 });
