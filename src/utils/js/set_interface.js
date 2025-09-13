export const SET_INTERFACE = (iterable_item,item_class) => {   
    for (let index = 0; index < iterable_item.length; index++) {
       iterable_item[index].className = item_class

    }
}