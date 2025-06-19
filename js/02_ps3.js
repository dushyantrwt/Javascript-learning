let items = [250, 645, 900, 300, 50];
 for (let i =0; i< items.length; i++){
    offer = items[i] / 10;
    items[i] = items[i] - offer;
 }

 console.log(items);
