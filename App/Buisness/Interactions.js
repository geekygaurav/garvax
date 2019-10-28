/**
 * Custom buisness layer.
 * You can save global methods or constants here.
 */



const disclaimer = 'https://api.myjson.com/bins/hhmzs'

export default{
 callDisclaimer(cb){
        fetch(disclaimer,{
          }).then(resp => resp.json())
            .then(data => {
                cb({
                    data
                })
            }).catch(data => {
                alert(data)
          });
    },
}
