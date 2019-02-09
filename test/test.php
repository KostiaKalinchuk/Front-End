<?php
//Есть массив:
//Необходимо сделать вывод данного массива в виде дерева в следующем формате (табуляция и переводы строк для удобства чтения, их можно опустить):
//<d<div>text_1
//    iv>text_2
//        <div>text_4
//            <div>text_5
//                <div>text_6</div>
//            </div>
//        </div>

$arr = array(
//      id  parent_id   text
    array(1,    0,      'text_1'),
    array(4,    2,      'text_4'),
    array(8,    0,      'text_8'),
    array(3,    1,      'text_3'),
    array(10,   3,      'text_10'),
    array(5,    4,      'text_5'),
    array(7,    3,      'text_7'),
    array(2,    1,      'text_2'),
    array(9,    0,      'text_9'),
    array(11,   0,      'text_11'),
    array(6,    4,      'text_6'),
    array(12,   11,     'text_12')
);
foreach($arr as $k=>$v){
    $arrs[] = $v[2];
}
natcasesort($arrs);
$_ = count($arrs);
array_walk($arrs, function($v,$k){
    echo "<div>".$v;
});
echo str_repeat('</div>',$_);





//Даны 3 таблицы: article, article_has_tag и tag. article и tag имеют связь M:N через таблицу article_has_tag.
//Hеобходимо написать SQL запрос, достающий первых 20 статей с присоединенным полем tags в виде строки включающей все теги, связанные со статьей.


$query = "SELECT a.*, GROUP_CONCAT(t.data) as tags FROM article a
JOIN article_hash_tag aht ON a.id=aht.article_id
JOIN tag t ON aht.tag_id=t.id
GROUP BY a.id
ORDER BY a.id
LIMIT 20";