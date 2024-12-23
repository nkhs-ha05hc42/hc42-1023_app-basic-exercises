const map6_6_3 = new Map();

map6_6_3.set('A', 'カレー');
map6_6_3.set('B', '定食');

if (map6_6_3.has('A')) {
    console.log(map6_6_3.get('A'));
} else {
    console.log('Aは存在しません');
}

if (map6_6_3.has('B')) {
    console.log(map6_6_3.get('B'));
} else {
    console.log('Bは存在しません');
}

if (map6_6_3.has('C')) {
    console.log(map6_6_3.get('C'));
} else {
    console.log('Cは存在しません');
}