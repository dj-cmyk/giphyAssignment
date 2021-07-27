console.log("Let's get this party started!");

$('#submitBtn').on("click", function(e){
    e.preventDefault();
    const searchTerm = $('#gifSearch').val();
    
    let randomNum = Math.floor(Math.random() * 50)
    getGif(searchTerm, randomNum);
    $('#gifSearch').val("");
})

//select random gif from response


//append the selected random gif to page
function appendGif(urlForGif){
    let newImg = `<div class="col"><img src="${urlForGif}" alt="" srcset=""></div>`
    console.log(newImg);
    $("#gifContainer").append(newImg)
}




//remove all gifs from page
$('#removeBtn').on("click", function(){
    $("#gifContainer > div").remove();
})



//get gif from api
async function getGif(searchTerm, randomNum){
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    // console.log(response.data.data[randomNum]);
    let gifURL = response.data.data[randomNum].images.downsized.url;
    appendGif(gifURL); 
}