console.log("LODASH 자바스크립트 라이브러리 실습");
        //const _ = "선문대학교";
        console.log(_);

            const products = [
                {
                    제품명 : "탐사수",
                    가격 : 500,
                    무게 : 50,
                },
                {
                    제품명 : "화장지",
                    가격 : 250,
                    무게 : 10,
                },
                {
                    제품명 : "모니터",
                    가격 : 100000,
                    무게 : 200,
                },
                {
                    제품명 : "마우스",
                    가격 : 12000,
                    무게 : 40,
                },
        ];
        const result = _.sortBy(products,["가격"]);
        console.log(result);
        const result2 = _.sortBy(products,["무게"]);
        console.log(result2);

        const result3 = _.sortBy(products,["가격","무게"]);
        console.log(result3);

        const result4 = _.reverse(products);
        console.log(result4);

        const result5 = _.orderBy(products, ["가격","무게","desc","asc"]);
        console.log(result5);

        var users = [

            { 'user': 'fred',   'age': 48 },

            { 'user': 'barney', 'age': 34 },

            { 'user': 'fred',   'age': 40 },

            { 'user': 'barney', 'age': 36 }

        ];

        const resultbyblog = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
        console.log(resultbyblog);
        // [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

        //_.orderBy(정렬할 배열, ['정렬기준1','정렬기준2'],
        //['정렬기준1의 오름내림차순','정렬기준2의 오름내림차순'])
        //asd : 오름차순, desc : 내림차순