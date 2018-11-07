export const setList=(data)=>{
   
    return {
        type:"list",
        data:data
    }
}

export const add=(sum)=>{
    return {
        type :"add",
        sum:sum
    }
}
export const addshow=(showdata)=>{
    return {
        type :"addshow",
        showdata:showdata
    }
}
export const caradd=(showdata)=>{
    console.log(999,caradd)
    return {
        type :"caradd",
        showdata:showdata
    }
}
export const all=(all)=>{
    return {
        type :"all",
        allsum:all
    }
}