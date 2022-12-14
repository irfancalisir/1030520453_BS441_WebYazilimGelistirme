export const Home = () => {
    return(
        <div>
            <h1>Taş Kağıt makas oyununa hoşgeldiniz.</h1>
            <h3>Hangi oyun modunu oynamak istersiniz?</h3>
            <a href="/tekkisi">
                <button style={{fontSize: "25px", backgroundColor:"green",color:"white",marginRight:"15px"}}>Tek Kişi</button>
            </a>
            <a href="/ikikisi">
                <button style={{fontSize: "25px", backgroundColor:"blue",color:"white"}}>İki Kişi</button>
            </a>
        </div>
    )
}