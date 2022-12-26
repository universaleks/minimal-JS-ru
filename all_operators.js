// 2. ОПЕРАТОРЫ
// у - унарный, б - бинарный, т - тернарный
// СПИСОК ВСЕХ ОПЕРАТОРОВ 
= + - + - * / % ++ -- += -= *= /= ,  > < >= <= == != === !==  & ^ | << >> >>> ~                   
б у у б б б б б у  у  б  б  б  б  б  б б б  б  б  б  б   б    б б б б  б  б   у
// ...                    
if-else  ?:  || && !
         т   б  б  у
// 2.1. АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ: плюс, минус, умножение, деление, остаток от деления
5+3; 5-3; 5*3; 5/3; 5%3; // последний это остаток от деления 5 на 3 - 5%3=2, терминология - 5 и 3 - левый и правый ОПЕРАНДЫ или АРГУМЕНТЫ операторов (соответствующих)
x = -x;// унарный - если применяется к одному операнду, здесь унарный оператор - унарный минус, унарный плюс(минус) обязательно писать вплотную к переменной, иначе воспринимается как сложение/вычитание или ошибка
x = y; x + y; // бинарный - если прим. к двум операндам, здесь бинарные операторы это равно и плюс
'моя' + ' строка'; // бинарный плюс, примененный к строкам - проводит операцию конкатенации (сложения) строк - получается 'моя строка'. Если хотя бы один аргумент строка, то бинарный оператор + проведет конкатенацию, а нестроки преобразуются в строки, Н. 'строка' + 5 будет 'строка5', все остальные арифметические операторы (минус и т.д.), наоборот, пытаются привести к числу. Н. 5 - '3' будет 2
+'1' + +'2'	// 3, а не 12 - т.к. оператор унарный + преобразует строку в число - этот побочный эффект унарного плюса широко применяется, может заменить ParseInt('') - функцию преобразования строки в число, причем унарные операторы выполняются раньше бинарных - объяснение в приоритете:
// существует целая ТАБЛИЦА ПРИОРИТЕТОВ операторов (т.к. в JS много операторов) - если, например, используется несколько операторов, то они будут выполнены по приоритету - у кого приоритетное число больше, тот выполняется раньше
a = 7 - 2; // 5.. равно - это оператор присваивания - правая часть присваивается левой, у него один из самых низких приоритетов, поэтому сначала выполняются арифметические действия, а затем уже происходит присваивание
a = c = b = 5+2; // возможно присваивание по цепочке, такое присваивание работает справа-налево, сначала арифметические действие 5+2=7, а затем 7 присвоится перем.b, затем с = b, затем a = c.
c = 3 - (a = 7 - 3) // ВСЕ операторы возвращают значение, оператор присваивания '=' тоже, сначала правый аргумент(число) присваивается левому(переменной), а затем возвращает это присвоенное значение(число), поэтому можно делать такие более сложные выражения, хотя они не очень понятны - здесь a присвоится число 4(скобки в приоритете), а затем вычислится выражение 3 - 4 и в переменную c запишется значение -1;
// сокращенные операторы - инкремент, декремент и др., можно применить только к переменным, инкремент и декремент имеет ПРИОРИТЕТ над арифметическими выражениями
i++; ++i; // i = i + 1 или i+=1 - инкремент i++ - постфиксная форма, ++i - префиксная форма
i--; --i; // i = i - 1 или i-=1 - декремент отличия, a = i++ (a=числу i до увеличения на 1), если ++i, то а = i после увеличения на 1, также если сразу смотреть alert( i++ ) - возвращает i до увеличения, ++i - после увеличения. Можно использовать в выражениях, н. если i=1, то 2 * ++i равно 4, 2 * i++ равно 2.
i-=x; // i = i - x - сокращает указанное выражение - эти операторы имеют такой же приоритет, как и =
i+=x; // i = i + x - сокращает указанное выражение
i*=x; // i = i * x - сокращает указанное выражение, еще можно %=, а также с бинарными операторами << >> >>> & | ^ что это рассмотрим позже (см. побитовые операторы)
i/=x; // i = i / x - сокращает указанное выражение - это называется сокращенная арифметика с присваиванием
// ПОБИТОВЫЕ операторы рассматривают аргументы как 32-разрядные целые числа и работают на уровне их внутреннего двоичного представления, рассмотрим отдельно позже
a = (5, 6, 8+7); //a=15 - самый необычный оператор - запятая - ',' - позволяет вычеслять выражения, разделенные запятой, слева-направо, отбрасывая их и возвращая значение последнего выражения, единственный оператор, приоритет которого ниже присваивания, если бы не было скобок (явного указания приоритета), то оператор запятой исполнился бы после присваивания и тогда было бы (a = 5), 6, 8+7; Используется в составе более сложных конструкций, чтобы сделать несколько действий в одной строке, например цикле перечисления - н. for (a=1,b=3,c=a*b;a<10;a++){...}, это используется, например, во многих javascript-фреймворках для укорачивания кода
// в JS есть единственный тернарный оператор ?, который мы пройдем позже (см. условные операторы)

// 2.2. ОПЕРАТОРЫ СРАВНЕНИЯ - возвращают значения, имеющие логический тип: true, false. Применяются для проверки чего-то.
// пусть a = 2, b = 1;
a>b; // 2>1 - возвратит true, т.к. 2 больше 1
a<b; // 2<1 - возвратит false, т.к. 2 не меньше 1
a>=b; // 2>=1 - возвратит true, т.к. 2 больше или равно 1
a<=b; // 2<=1 - возвратит false, т.к. 2 не меньше или равно 1
a==b; // 2==1 - возвратит false, т.к. 2 не равно 1
a!=b; // 2!=1 - возвратит true, т.к. 2 не равно 1
// лексикографическое сравнение (сравнение строк)
'Б'>'А'; // true, код 'Б' больше, чем код 'А' - если сравниваем строки, то сравниваются побуквенно численные коды символов из кодировки (unicod-UTF8), код у строчных больше заглавных, кстати, по кодировке
'Бак'>'Масса'; // false, код 'Б' не больше, чем код 'М' - если сравниваем строки из нескольких букв, то сравниваются сначала первые буквы, если одинаковые, то след. и т.д. Если уже первые разные, то где код больше, тот и больше
'Дом'>'До'; // true, 'м' больше чем 'пустота' - любой символ больше отсутствия символа
'2'>'14' // true, но 2 меньше 14! - разные функции и команды возвращают нам разные типы, обычно строки, поэтому нужно следить - если числа возвращаются в виде строк, то сравнение чисел в виде строк будет не правильным арифметически, поэтому здесь, например надо: +'2'>+'14' , из-за того, что унарный плюс преобразовал строки в числа, сравнение пройдет правильно и нам возвратится false
a = true; b = false; // логические значения можно использовать напрямую, присваивать переменным явно или:
a = 5 < 3; b = 5==5; // a = false, b = true - это неявное присвоение логического значения
// сравнение разных типов - если такое происходит, то используется числовое преобразование, применяемое к обоим значениям, такие преобразование позже пройдем более подробно..
'2' > 1; // true, сравнивается как 2 > 1
'01' == 1; // true, сравнивается как 1 == 1
false == 0; // true, логический false преобразуется в число 0
true == 1; // true, логический true преобразуется числом 1.
// строгое равенство - в == есть проблемы, н. 0 или '' не отличает от false (0 == false возвращает true) - происходит, потому что false и '' преобразуются в число при сравнении, в какое? - в 0, поэтому true, поэтому если нужно сравнивать с учетом типа, сравнивать без преобразования типов, используются операторы строгого равенства === и !== - типы равны или не равны (сравнение как бы типов)
0 === false; // false, нет, типы не совпадают
0 !== false; // true, да, типы разные
// null и undefined при сравнении ведут себя по особому null нестрого == undefined, но != чему бы то ни было еще, это прописано в спецификации, при преобразовании в число null преобразуется в 0, а undefined становится NaN. Если > < >= <= честно преобразуются в число, а если ==, то обработка особым образом - равны друг другу, не равны чему-то еще
null == undefined; // true, хоть и преобразуются в 0 и NaN соответственно
null > 0; null == 0; // оба false, но
null >= 0; // true! Как так? Операторы сравнения >= > < <= преобразовывают null в 0, поэтому null больше 0 не верно, так как 0 не больше 0, а null >= 0 верно, так как 0 >= 0 верно. А вот оператор сравнения - проверки равенства == null в 0 не преобразовывает, алгоритм сравнения == другой, он просто говорит, что null не равен 0 и все. Короче тезис: null == undefined в JS, но не равен чему бы то ни было еще! Если строго, то null !== undefined.
undefined > 0; undefined < 0; undefined == 0; // все false: undefined вообще нельзя сравнивать: > 0 или < 0 false потому, что преобразование в число дает NaN, NaN вообще не больше и не меньше нуля, это не число..По стандарту при сравнении с NaN == < > <= >= и даже === возвращают false. Undefined == 0 false потому, что в стандарте явно прописано, что undefined равно лишь null и ничему другому.
// Вывод: все сравнения, кроме точного === с undefined/null следует делать с осторожностью, желательно не использовать сравнения >= > < <= с ними вообще во избежание ошибок в коде
& ^ | << >> >>> ~ // Есть еще ПОБИТОВЫЕ ОПЕРАТОРЫ  их объяснение вынесу в отдельный файл [JSBitOperators.js]

// УСЛОВНЫЕ ОПЕРАТОРЫ: if и ? - это операторы, в зависимости от соответствия (true/false) поставленному условию выполняют какие-либо действия: если true, то ..., если false, то ...
// оператор if-else: if_если (true) { то это } else_иначе { это };
// в () указывают условие, которое вычисляется и преобразуется к логическому типу по правилу лжи:
0,'',null,undefined,NaN в false, остальные значения в true // Если условие верно - true, то команды в блоке {} выполняются, если false, то не выполняются, но выполняются в блоке else {}, если он есть, т.к. блок else выполняет условие, если оно, наоборот, не верно (false).. Еще может быть подряд несколько условий if () {} else if () {} else {}; и их можно продолжать до бесконесности, в последнем примере будет ясно, как это работает.
if (0) { 'с таким условием этот блок никогда не выполнится' }; // 0 преобразуется в false, а если false, проскакиваем дальше без выполнения
if (a != 5) { 'здесь действия' }; // если команда одна, то {} можно не ставить, но рекомендуется всегда ставить, это улучшает читаемость кода, блок else тоже необязателен, но вот пример с else:
if (true) { ... } else {}; // true, так что выполняем первый блок {}
if (n > 1) {.01.} else if (n < 0) {.02.} else {.03.}; // если n==0, то выполнится {.03.}; посмотрим логику: если (n>1 - ложь!), {.01. - проскакиваем}, тогда иначе - если (n<0 - ложь!), {.02. - проскакиваем}, тогда иначе {.03. - выполняем!}, т.е. JavaScript проверяет первое условие, если оно ложно, переходит к проверке второго условия.. и так далее, вплость до последнего else.
// Если нужно от результата условия МЕНЯТЬ ЗНАЧЕНИЕ ПЕРЕМЕННОЙ (в одном блоке одно, в другом другое и т.д.), то есть смысл использовать другой условный оператор - ?, позволяющий делать это короче и проще, буквально одной строкой: условие ? знач1еслиtrue : знач2еслиfalse; Это единственный тернарный оператор в JS, т.е. такой, который работает с тремя АРГУМЕНТАМИ. Если условие верно, то возвращает значение1, если неверно, то значение2:
a = (age+4 > 14) ? true : false; // условие можно и без скобок, т.к. сам оператор ? выполняется по приоритету позже других, в частности - позже сравнений, но со () код читается лучше, поэтому рекомендуется их ставить; также в данном примере можно было вообще без тернарного оператора ?, т.к. сравнение само по себе уже возвращает true/false: a = age+4 > 14;
// операторы ? можно совмещать, в этом случае они работают подобно if   else if   else if   else:
let message = (age < 14) ? '1 условие верно' :
	(age < 18) ? 'Если 1 ложь, тогда если 2 истина, то это' :
	(age <= 33) ? 'и 2 нет, ну тогда вы в золотом возрасте!' : 'вы пережили Иисуса!'; // если 1 не верно, то после ':' проверка 2, если тоже не верно, то опять за ':' проверка 3 .. и т.д. до последнего false, либо если где-то true, то возвращение соответствующего значения. В общем, это обычная последовательная проверка
(c == 'Аадя') ? alert('я Аадя!') : alert('я не Аадя'); // оператор ? можно также использовать вместо if..else, значение не присваивается в переменную, поэтому как бы пропадает, а исполняются соответствующие команды в зависимости от результата проверки условия, но в этом случае if считается более читабельным, поэтому ? рекомендуется как if не использовать.
// таким образом - if..else используем для ветвления кода: если так, то так, иначе так. Смысл же оператора ? возвращать то или иное значение (и присваивать переменной, например), в зависимости от условия

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ: бинарный || (или), бинарный && (и), унарный !(не). (будет добавлено позже)
