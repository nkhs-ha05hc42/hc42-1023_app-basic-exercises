const map6_6_4 = new Map();

map6_6_4.set('A', 'カレー');
map6_6_4.set('B', '定食');

map6_6_4.delete('A');

if (map6_6_4.has('A')) {
    console.log(map6_6_4.get('A'));
} else {
    console.log('Aは存在しません');
}

if (map6_6_4.has('B')) {
    console.log(map6_6_4.get('B'));
} else {
    console.log('Bは存在しません');
}