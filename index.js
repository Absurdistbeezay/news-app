
// console.log(api.key);

function showNews(){

    //fetch api
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=6dc12187f14a43d6b1b8d297efcd6347`;

    // const url = `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6dc12187f14a43d6b1b8d297efcd6347`;
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
        let newsResult = '<div class ="card-columns">';
       

        for(let i=0; i< data.articles.length; i++){
            if(data.articles[i].urlToImage===null){
                data.articles[i].urlToImage = 'https://lh3.googleusercontent.com/9Wn_FfGtgbvFQuKiDmJitEJP790Du71crZIvtR_81DljiGfUXZfPGuFzeftZIiuEmjoNRFpPEI6RP3XN9Sz9INd3xxsD1P-Zbput2GbMV0qpe-fP5UvSt0slRHAJ90SzTvvS5MJ39k-HMyjKZJNrg77viebmF1LnBIT8hZO5NFc9cNb2mpAXck3MZrWBWRSqPsZWxKLPWle2poB5geJWAHe5rCfV0CaBEiR4bNw6T_0dUQjmqt7i8tdHu4AmIj6QrfmqBSh5i3cdp6XuZGJg4IiZgWq4WwV3lVGEAq-OYDsZb_jlrk09V1UtC_V293ly380_howQC6sIofgdXzUDsG0Fhm8Wa32K98aVC93qILL6Si2sM1EW5Lly5jtpjDGt_Jyrmv1jq03p1UPMfJVZ5tbBVqVrybDek44Mx7egcaX-NQWAvU2UtxPMJlb8kFSQCcNWD1SEI249Ubi00axjjLDeXzLZppcJMdD_eHPxGrIZJUtrAvystsYHH0lHVrku_RXnYsFdBpkQEDXHozL03qLCm3otI72cdRn-GQLWowAajyG_Mb7KiTa3judZ3k1IEEucu4T5TRWdjd_eKozmg-_izByVarivVJXpRKN5NMEjTmTYWcqmGXprv4Qe2FfBY6aKhJ997kXt1EVKVpnxN3aoZKebnETr=w1416-h944-no';

            }
            newsResult += `
            <div class="card">
            <img src="${data.articles[i].urlToImage}" class="card-image-top">
            <div class="card-body">
                <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="card-text">
                        ${data.articles[i].description}
                    </p>
                <a href="${data.articles[i].url}" class="btn btn-primary">Read More</a>
            </div>
        </div>
            `
      
        }
        newsResult +='</div>';
        document.getElementById("latestNews").innerHTML = newsResult;
    }).catch(err=>console.log(err));    
}

//call function
showNews();


