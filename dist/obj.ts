let category = {
    mobileBatteries: {
        title: 'Универсальные мобильные батареи',
        amount: 0,
        feature: [ 
            // [['Емкость'], [, '999999-21000'], ['21000 - 16000мА*ч', '21000-16000'], ['16000 - 10000мА*ч', '16000-10000'], ['5000 - 10000мА*ч']],
            [['Емкость', 'opacity', 'range'], 'Более 21000мА*ч', '21000 - 16000мА*ч', '16000 - 10000мА*ч', '10000 - 5000мА*ч', 'Менее 5000мА*ч'],
            [['Особенности', 'feature'], 'Быстрая зарядка', 'Противоударный', 'С солнечной батареей', 'С фонариком'],
            [['Цвет', 'color'], 'Белый', 'Красный', 'Черный', 'Другой'],
            [['Страна', 'country'], 'Украина', 'США', 'Германия', 'Китай'],
        ],

        products: [
            {
                id: 10001,
                notice: 'Топ продаж', /*changed*/
                image: 'assets/images/mobileBatteries/card0.jpg',
                describe: 'УМБ Xiaomi Mi Power Bank Pro 9000 mAh Type-C Dark Grey1',
                feedback: '245', /*changed*/
                rate: '5', /*changed*/
                priceCrossed: '699',
                price: '11499',
                state: 'Заканчивается', amount: '5', /*changed*/
                opacity: '9000',
                feature: 'Быстрая зарядка батареи',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1000,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card1.jpg',
                describe: 'УМБ Xiaomi Mi Power Bank 2C 10000 mAh QC3.0 PLM06ZM White (VXN4220GL)2',
                feedback: '1799',
                rate: '4',
                priceCrossed: '799',
                price: '589',
                state: 'Есть в наличии', amount: '20',
                opacity: '10000',
                feature: 'Противоударный',
                color: 'Белый',
                country: 'США'
            },
            {
                id: 2000,
                notice: '-25%',
                image: 'assets/images/mobileBatteries/card2.jpg',
                describe: 'УМБ Xiaomi Redmi Power Bank 20000mAh 2xUSB QC3.0 18W PB200LZM White (VXN4285GL)3',
                feedback: '218',
                rate: '4.5',
                priceCrossed: '659',
                price: '555',
                state: 'Есть в наличии', amount: '20',
                opacity: '20000',
                feature: 'Быстрая зарядка батареи',
                color: 'Белый',
                country: 'США'
            },
            {
                id: 3000,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card3.jpg',
                describe: 'УМБ Promate Titan-30 30000 mAh 30Вт Type-C PD 18Вт USB QC3.0 USB 2.4А Black (titan-30.black)4',
                feedback: '41',
                rate: '4.5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Есть в наличии', amount: '20',
                opacity: '30000',
                feature: 'С солнечной батареей',
                color: 'Черный',
                country: 'Германия'
            },
            {
                id: 4000,
                notice: 'Топ продаж',
                image: 'assets/images/mobileBatteries/card4.jpg',
                describe: 'УМБ Xiaomi Redmi Power Bank 12000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)5',
                feedback: '141',
                rate: '5',
                priceCrossed: '888',
                price: '777',
                state: 'Есть в наличии', amount: '20',
                opacity: '12000',
                feature: 'С солнечной батареей',
                color: 'Белый',
                country: 'Украина'
            },
            {
                id: 5000,
                notice: 'Топ продаж',
                image: 'assets/images/mobileBatteries/card5.jpg',
                describe: 'IBM aplle Redmi Power Bank 20000mAh USB-C PB100LZM White (VXN4286GL)6',
                feedback: '341',
                rate: '3.8',
                priceCrossed: '1234',
                price: '1000',
                state: 'Заканчивается', amount: '5',
                opacity: '20000',
                feature: 'С солнечной батареей',
                color: 'Другой',
                country: 'Китай'
            },
            {
                id: 6000,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card6.jpg',
                describe: 'Redmi Power Bank 40000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)7',
                feedback: '341',
                rate: '4.5',
                priceCrossed: '999',
                price: '499',
                state: 'Заканчивается', amount: '5',
                opacity: '40000',
                feature: 'С фонариком',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 7000,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card7.jpg',
                describe: 'HP Power Bank 15000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)8',
                feedback: '541',
                rate: '4',
                priceCrossed: '2999',
                price: '2499',
                state: 'Есть в наличии', amount: '20',
                opacity: '15000',
                feature: 'Быстрая зарядка',
                color: 'Белый',
                country: 'США'
            },
            {
                id: 8000,
                notice: 'none',
                image: 'assets/images/mobileBatteries/card8.jpg',
                describe: 'УМБ apple Power Bank 2900mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)9',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '699',
                state: 'Заканчивается', amount: '5',
                opacity: '2900',
                feature: 'С солнечной батареей',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 9000,
                notice: 'none',
                image: 'assets/images/mobileBatteries/card9.jpg',
                describe: 'УМБ Xiaomi Redmi Power Bank 4000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)11',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '655',
                state: 'Есть в наличии', amount: '20',
                opacity: '4000',
                feature: 'С фонариком',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 1001,
                notice: 'Топ продаж',
                image: 'assets/images/mobileBatteries/card9.jpg',
                describe: 'УМБ Nokia Power Bank 5000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)12',
                feedback: '141',
                rate: '5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Заканчивается', amount: '5',
                opacity: '5000',
                feature: 'С быстрой зарядкой',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1100,
                notice: 'Топ продаж',
                image: 'assets/images/mobileBatteries/card9.jpg',
                describe: 'УМБ Nokia Power Bank 5000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)13',
                feedback: '141',
                rate: '5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Заканчивается', amount: '5',
                opacity: '5000',
                feature: 'С быстрой зарядкой',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1200,
                notice: 'none',
                image: 'assets/images/mobileBatteries/card9.jpg',
                describe: 'УМБ Xiaomi Redmi Power Bank 4000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)14',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '655',
                state: 'Есть в наличии', amount: '20',
                opacity: '4000',
                feature: 'С фонариком',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 1300,
                notice: 'none',
                image: 'assets/images/mobileBatteries/card8.jpg',
                describe: 'УМБ apple Power Bank 2900mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)15',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '699',
                state: 'Заканчивается', amount: '5',
                opacity: '2900',
                feature: 'С солнечной батареей',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 1400,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card7.jpg',
                describe: 'HP Power Bank 15000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)116',
                feedback: '541',
                rate: '4',
                priceCrossed: '2999',
                price: '2499',
                state: 'Есть в наличии', amount: '20',
                opacity: '15000',
                feature: 'Быстрая зарядка',
                color: 'Белый',
                country: 'США'
            },
            {
                id: 1500,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card6.jpg',
                describe: 'Redmi Power Bank 40000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)17',
                feedback: '341',
                rate: '4.5',
                priceCrossed: '999',
                price: '499',
                state: 'Заканчивается', amount: '5',
                opacity: '40000',
                feature: 'С фонариком',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1600,
                notice: 'Топ продаж', /*changed*/
                image: 'assets/images/mobileBatteries/card0.jpg',
                describe: 'УМБ Xiaomi Mi Power Bank Pro 9000 mAh Type-C Dark Grey18',
                feedback: '245', /*changed*/
                rate: '5', /*changed*/
                priceCrossed: '699',
                price: '499',
                state: 'Заканчивается', amount: '5', /*changed*/
                opacity: '9000',
                feature: 'Быстрая зарядка батареи',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 17000,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card1.jpg',
                describe: 'УМБ Xiaomi Mi Power Bank 2C 10000 mAh QC3.0 PLM06ZM White (VXN4220GL)19',
                feedback: '1799',
                rate: '4',
                priceCrossed: '799',
                price: '589',
                state: 'Есть в наличии', amount: '20',
                opacity: '10000',
                feature: 'Противоударный',
                color: 'Белый',
                country: 'США'
            },
            {
                id: 18000,
                notice: '-25%',
                image: 'assets/images/mobileBatteries/card2.jpg',
                describe: 'УМБ Xiaomi Redmi Power Bank 20000mAh 2xUSB QC3.0 18W PB200LZM White (VXN4285GL)20',
                feedback: '218',
                rate: '4.5',
                priceCrossed: '659',
                price: '555',
                state: 'Есть в наличии', amount: '20',
                opacity: '20000',
                feature: 'Быстрая зарядка батареи',
                color: 'Белый',
                country: 'США'
            },
            {
                id: 1900,
                notice: 'Акция',
                image: 'assets/images/mobileBatteries/card3.jpg',
                describe: 'УМБ Promate Titan-30 30000 mAh 30Вт Type-C PD 18Вт USB QC3.0 USB 2.4А Black (titan-30.black)21',
                feedback: '41',
                rate: '4.5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Есть в наличии', amount: '20',
                opacity: '30000',
                feature: 'С солнечной батареей',
                color: 'Красный',
                country: 'Германия'
            },
            {
                id: 2001,
                notice: 'Топ продаж',
                image: 'assets/images/mobileBatteries/card4.jpg',
                describe: 'УМБ Xiaomi Redmi Power Bank 12000mAh USB-C PB100LZM White (VXN4266CN/VXN4286GL)22',
                feedback: '141',
                rate: '5',
                priceCrossed: '888',
                price: '777',
                state: 'Есть в наличии', amount: '20',
                opacity: '12000',
                feature: 'С солнечной батареей',
                color: 'Красный',
                country: 'Украина'
            }
        ]
    },

    headphones: {
        title: 'Наушники',
        amount: 0,
        feature: [
            [['Тип наушников', 'opacity'], 'Вакуумные', 'Вкладыши', 'Костные', 'Накладные', 'Полноразмерные'],
            [['Особенности', 'feature'], 'Androind совместимые', 'Apple совместимые', 'Басовые', 'Микро', 
            'С влагозащитой', 'Чехол акамулятор'],
            [['Цвет', 'color'], 'Белый', 'Красный', 'Черный', 'Другой'],
            [['Страна', 'country'], 'Украина', 'США', 'Германия', 'Китай'],
        ],

        products: [
            {
                id: 1000,
                notice: 'Топ продаж', /*changed*/
                image: 'assets/images/headphones/card0.jpg',
                describe: 'Xiaomi наушники1',
                feedback: '245', /*changed*/
                rate: '5', /*changed*/
                priceCrossed: '699',
                price: '499',
                state: 'Заканчивается', amount: '5', /*changed*/
                opacity: 'Вакуумные',
                feature: 'Androind совместимые',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1001,
                notice: 'Акция',
                image: 'assets/images/headphones/card1.jpg',
                describe: 'HP наушники2',
                feedback: '1799',
                rate: '4',
                priceCrossed: '799',
                price: '589',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Вкладыши',
                feature: 'Apple совместимые',
                color: 'Другой',
                country: 'США'
            },
            {
                id: 1002,
                notice: '-25%',
                image: 'assets/images/headphones/card2.jpg',
                describe: 'Xiaomi наушники3',
                feedback: '218',
                rate: '4.5',
                priceCrossed: '659',
                price: '555',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Костные',
                feature: 'Микро',
                color: 'Черный',
                country: 'США'
            },
            {
                id: 1003,
                notice: 'Акция',
                image: 'assets/images/headphones/card3.jpg',
                describe: 'Promate Titan наушники4',
                feedback: '41',
                rate: '4.5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Накладные',
                feature: 'С влагозащитой',
                color: 'Черный',
                country: 'Германия'
            },
            {
                id: 1004,
                notice: 'Топ продаж',
                image: 'assets/images/headphones/card4.jpg',
                describe: 'Xiaomi наушники5',
                feedback: '141',
                rate: '5',
                priceCrossed: '888',
                price: '777',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Полноразмерные',
                feature: 'Чехол акамулятор',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1005,
                notice: 'Топ продаж',
                image: 'assets/images/headphones/card5.jpg',
                describe: 'IBM aplle Redmi Power наушники (VXN4286GL)6',
                feedback: '341',
                rate: '3.8',
                priceCrossed: '1234',
                price: '1000',
                state: 'Заканчивается', amount: '5',
                opacity: 'Вакуумные',
                feature: 'Басовые',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 1006,
                notice: 'Акция',
                image: 'assets/images/headphones/card6.jpg',
                describe: 'Redmi наушники(VXN4266CN/VXN4286GL)7',
                feedback: '341',
                rate: '4.5',
                priceCrossed: '999',
                price: '499',
                state: 'Заканчивается', amount: '5',
                opacity: 'Вакуумные',
                feature: 'Чехол акамулятор',
                color: 'Другой',
                country: 'Украина'
            },
            {
                id: 1007,
                notice: 'Акция',
                image: 'assets/images/headphones/card7.jpg',
                describe: 'HP наушники8',
                feedback: '541',
                rate: '4',
                priceCrossed: '2999',
                price: '2499',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Вкладыши',
                feature: 'Androind совместимые',
                color: 'Черный',
                country: 'США'
            },
            {
                id: 1008,
                notice: 'none',
                image: 'assets/images/headphones/card8.jpg',
                describe: 'УМБ apple наушники9',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '699',
                state: 'Заканчивается', amount: '5',
                opacity: 'Костные',
                feature: 'С влагозащитой',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 1009,
                notice: 'none',
                image: 'assets/images/headphones/card9.jpg',
                describe: 'Xiaomi наушники10',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '655',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Накладные',
                feature: 'Androind совместимые',
                color: 'Красный',
                country: 'Китай'
            },
            {
                id: 1010,
                notice: 'Топ продаж',
                image: 'assets/images/headphones/card9.jpg',
                describe: 'Xiaomi наушники11',
                feedback: '141',
                rate: '5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Заканчивается', amount: '5',
                opacity: 'Полноразмерные',
                feature: 'Басовые',
                color: 'Красный',
                country: 'Украина'
            },
            {
                id: 101,
                notice: 'Топ продаж', /*changed*/
                image: 'assets/images/headphones/card0.jpg',
                describe: 'Xiaomi наушники12',
                feedback: '245', /*changed*/
                rate: '5', /*changed*/
                priceCrossed: '699',
                price: '499',
                state: 'Заканчивается', amount: '5', /*changed*/
                opacity: 'Вакуумные',
                feature: 'Androind совместимые',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1012,
                notice: 'Акция',
                image: 'assets/images/headphones/card1.jpg',
                describe: 'HP наушники13',
                feedback: '1799',
                rate: '4',
                priceCrossed: '799',
                price: '589',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Вкладыши',
                feature: 'Apple совместимые',
                color: 'Другой',
                country: 'США'
            },
            {
                id: 1013,
                notice: '-25%',
                image: 'assets/images/headphones/card2.jpg',
                describe: 'Xiaomi наушники14',
                feedback: '218',
                rate: '4.5',
                priceCrossed: '659',
                price: '555',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Костные',
                feature: 'Микро',
                color: 'Черный',
                country: 'США'
            },
            {
                id: 1014,
                notice: 'Акция',
                image: 'assets/images/headphones/card3.jpg',
                describe: 'Promate Titan наушники15',
                feedback: '41',
                rate: '4.5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Накладные',
                feature: 'С влагозащитой',
                color: 'Черный',
                country: 'Германия'
            },
            {
                id: 1015,
                notice: 'Топ продаж',
                image: 'assets/images/headphones/card4.jpg',
                describe: 'Xiaomi наушники16',
                feedback: '141',
                rate: '5',
                priceCrossed: '888',
                price: '777',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Полноразмерные',
                feature: 'Чехол акамулятор',
                color: 'Черный',
                country: 'Украина'
            },
            {
                id: 1016,
                notice: 'Топ продаж',
                image: 'assets/images/headphones/card5.jpg',
                describe: 'IBM aplle Redmi Power наушники (VXN4286GL)17',
                feedback: '341',
                rate: '3.8',
                priceCrossed: '1234',
                price: '1000',
                state: 'Заканчивается', amount: '5',
                opacity: 'Вакуумные',
                feature: 'Басовые',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 1017,
                notice: 'Акция',
                image: 'assets/images/headphones/card6.jpg',
                describe: 'Redmi наушники(VXN4266CN/VXN4286GL)18',
                feedback: '341',
                rate: '4.5',
                priceCrossed: '999',
                price: '499',
                state: 'Заканчивается', amount: '5',
                opacity: 'Вакуумные',
                feature: 'Чехол акамулятор',
                color: 'Другой',
                country: 'Украина'
            },
            {
                id: 1018,
                notice: 'Акция',
                image: 'assets/images/headphones/card7.jpg',
                describe: 'HP наушники19',
                feedback: '541',
                rate: '4',
                priceCrossed: '2999',
                price: '2499',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Вкладыши',
                feature: 'Androind совместимые',
                color: 'Черный',
                country: 'США'
            },
            {
                id: 1019,
                notice: 'none',
                image: 'assets/images/headphones/card8.jpg',
                describe: 'УМБ apple наушники21',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '699',
                state: 'Заканчивается', amount: '5',
                opacity: 'Костные',
                feature: 'С влагозащитой',
                color: 'Черный',
                country: 'Китай'
            },
            {
                id: 1020,
                notice: 'none',
                image: 'assets/images/headphones/card9.jpg',
                describe: 'Xiaomi наушники22',
                feedback: '141',
                rate: '5',
                priceCrossed: 'none',
                price: '655',
                state: 'Есть в наличии', amount: '20',
                opacity: 'Накладные',
                feature: 'Androind совместимые',
                color: 'Красный',
                country: 'Китай'
            },
            {
                id: 1021,
                notice: 'Топ продаж',
                image: 'assets/images/headphones/card9.jpg',
                describe: 'Xiaomi наушники23',
                feedback: '141',
                rate: '5',
                priceCrossed: '1999',
                price: '1499',
                state: 'Заканчивается', amount: '5',
                opacity: 'Полноразмерные',
                feature: 'Басовые',
                color: 'Красный',
                country: 'Украина'
            }
        ]
    }
};


let infoJson = JSON.stringify(category);

export default infoJson;