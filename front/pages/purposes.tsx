//  cele terapii, podstawowe założenia
import BenefitsInDetail from 'components/sections/BenefitsInDetail';
import Welcome from 'components/sections/Welcome';
import React from 'react';

const Purposes = () => {
    return (
        <React.Fragment>
            <Welcome
                image="/images/values.jpg"
                headline="Czym się wyróżniamy?"
                text="Sprawdź zalety psychoterapii w nurcie humanistycznym"
            />
            <BenefitsInDetail
                isLove
                headline="Empatia"
                texts={[
                    {
                        text: `Wybierając nasz gabinet mają Państwo gwarancję zrozumienia i absolutny brak osądu przez naszych terapeutów. Naszym priorytetem jest, by nasz każdy klient czuł, że może polegać nas i naszych specjalistów, którzy będą gotowi przyjąć Państwa sposób myślenia i zobaczenia rzeczywistości waszymi oczami.`,
                    },
                ]}
            />
            <BenefitsInDetail
                isLoupe
                headline="Tu i teraz"
                texts={[
                    {
                        text: `W sposób jaki prowadzimy jest zgodny z psychologią humanistyczną, więc skupimy się na tobie w teraźniejszości, byś w pełni osiągnął najlepsza wersję siebie. Wierzymy, że praca nad teraźniejszością jest bramą do lepszego jutra.`,
                    },
                ]}
            />
            <BenefitsInDetail
                isPerson
                headline="Indywidualizm"
                texts={[
                    {
                        text: `Terapeuci z naszego gabinetu wierzą, że każdy człowiek jest wyjątkową i oryginalną jednostką, więc podchodzą do każdego pacjenta w inny sposób, który będzie najbardziej efektywny dla jego rozwoju. Terapeuta dostosuje się do twoich potrzeb i wybierze odpowiedni styl terapii, który najlepiej i najszybciej ulepszy jakość twojego życia.`,
                    },
                ]}
            />
            <BenefitsInDetail
                isCouple
                headline="Dostosowanie"
                texts={[
                    {
                        text: `W naszym gabinecie przyjmujemy osoby od wieku nastoletniego, więc jeżeli jesteś rodzicem lub opiekunem prawnym dziecka od 11 roku życia możesz wykupić dla niego wizytę. Oczywiście terapia będzie dostosowana do wieku klienta!`,
                    },
                ]}
            />
            <BenefitsInDetail
                isAnalized
                headline="Wybór własnej ścieżki"
                texts={[
                    {
                        text: `Kto nie zna ciebie jak nie ty! To klient decyduje o kierunku swojego leczenia, a nasi terapeuci są po to, byś bezpiecznie, sukcesywnie dotarł do końca drogi leczenia oraz stał się wymarzoną wersją siebie.`,
                    },
                ]}
            />
            <BenefitsInDetail
                isLove
                headline="Zaufanie"
                texts={[
                    {
                        text: `Zaufanie jest fundamentem dobrej i udanej terapii, więc dopełniliśmy starań, by każdy z naszych terapeutów wzbudzał poczucie stabilności i oparcia dla każdego pacjenta, który powierzy mu swoje myśli, emocje lub plany. Wszyscy nasi specjaliści są zobowiązani do utrzymania tajemnicy lekarskiej, więc możesz mieć pewność, że wszystko co wydarzy się w trakcie sesji zostanie pomiędzy tobą, a terapeutą.`,
                    },
                ]}
            />
        </React.Fragment>
    );
};

export default Purposes;
