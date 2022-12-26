import { useState } from "react";
import tas from '../fotolar/tas.png';
import kagit from '../fotolar/kagit.png';
import makas from '../fotolar/makas.png';


export const Hayattakalma = () => {
    const [secim, setSecim] = useState('');
    const [can, setCan] = useState(3);

    const handleChoice = (e) => {
        setSecim(e.target.value);
        console.log(e.target.value);
    }
    const battle = () => {
        if(secim === ''){
            alert("Seçim Yapmadın!")
            return;
        }
        const pcChoice = Math.floor(Math.random() * 3);
        const pcArray = ["TAS", "KAGIT", "MAKAS"];
        const pc = pcArray[pcChoice];
        const result =
        secim === pc
            ? "Berabere!"
            : secim === "TAS" && pc === "KAGIT"
            ? `Seçimin: ${secim}\nPC: ${pc}\nPC Kazandı!`
            : secim === "KAGIT" && pc === "MAKAS"
            ? `Seçimin: ${secim}\nPC: ${pc}\nPC Kazandı!`
            : secim === "MAKAS" && pc === "TAS"
            ? `Seçimin: ${secim}\nPC: ${pc}\nPC Kazandı!`
            : `Seçimin: ${secim}\nPC: ${pc}\nKAZANDIN!`;
        if(result.includes("KAZANDIN")){
            setCan(can+1);
            if(can === 10){
                alert("ARTIK OYNAMANA GEREK YOK 10 CANIN VAR!! KAZANDIN");
                return;
            }
        }
        else if (result.includes("PC Kazandı")){
            setCan(can-1);
            if(can <= 0){
                alert("ARTIK OYNAYAMAZSIN CANIN KALMADI. KAYBETTİN");
                return;
            }
        }
        alert(result);

    }

    return(
        <div>
            <div>
                Her kazandığınız rauntta 1 can kazanır, kaybettiğiniz her rauntta 1 can kaybedersiniz.<br/>
                Canınız 0 olursa kaybedersiniz, 10 olursa kazanırsınız.<br/>
                Kalan can: {can}<br/>
            </div>
            <div>
                <p>Taş Kağıt Makas?</p>
                <div onChange={handleChoice}>
                    <input type="radio" value="TAS" name="sec"/> Taş <img style={{width: "150px"}} src={tas} className="Resim" alt="Tas" />
                    <input type="radio" value="KAGIT" name="sec"/> Kağıt <img style={{width: "150px"}} src={kagit} className="Resim" alt="kagit" />
                    <input type="radio" value="MAKAS" name="sec"/>Makas <img style={{width: "150px"}} src={makas} className="Resim" alt="makas" />
                </div>
            </div>
            <div style={{paddingTop: "8px"}}>
                <button style={{fontSize: "25px", backgroundColor:"green",color:"white"}} onClick={battle}>
                        SAVAŞ!
                </button>
            </div>
            <div style={{paddingTop: "35px"}}>
                <a href="/">
                    <button style={{fontSize: "20px"}}>Anasayfaya Dön</button>
                </a>
            </div>

      </div>
    )
}
