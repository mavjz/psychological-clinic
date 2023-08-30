import Article from 'components/sections/Article';
import WrapperWidth from 'components/wrappers/Wrapperwidth';
import React from 'react';

const Statue = () => {
    return (
        <WrapperWidth>
            <Article
                headline="Regulamin Poradni Psychologicznej HumanHealth.com"
                texts={[
                    {
                        text: '1. Postanowienia ogólne',
                    },
                    {
                        text: '1.1. Niniejszy regulamin określa zasady korzystania z usług świadczonych przez Poradnię Psychologiczną HumanHealth.com oraz reguluje prawa i obowiązki Klientów.',
                    },
                    {
                        text: '1.2. Korzystając z usług Poradni Psychologicznej HumanHealth.com, Klient akceptuje postanowienia niniejszego regulaminu.',
                    },
                    {
                        text: '2. Usługi świadczone przez Poradnię Psychologiczną',
                    },
                    {
                        text: '2.1. Poradnia Psychologiczna HumanHealth.com oferuje usługi z zakresu psychoterapii, poradnictwa psychologicznego oraz terapii indywidualnej i grupowej.',
                    },
                    {
                        text: '2.2. Usługi są świadczone przez wykwalifikowanych psychoterapeutów i specjalistów psychologicznych zgodnie z najlepszymi praktykami oraz standardami etycznymi.',
                    },
                    {
                        text: '3. Warunki umawiania wizyt',
                    },
                    {
                        text: '3.1. Klient ma możliwość umówienia wizyty poprzez kontakt telefoniczny, e-mail lub za pomocą formularza dostępnego na stronie internetowej.',
                    },
                    {
                        text: '3.2. W przypadku konieczności zmiany lub odwołania wizyty, Klient zobowiązany jest do poinformowania Poradni co najmniej 24 godziny przed planowanym terminem.',
                    },
                    {
                        text: '4. Odpowiedzialność Poradni Psychologicznej',
                    },
                    {
                        text: '4.1. Poradnia Psychologiczna HumanHealth.com podejmuje wszelkie starania, aby świadczone usługi były profesjonalne i skuteczne. Jednakże, nie gwarantuje pełnego sukcesu terapeutycznego w każdym przypadku.',
                    },
                    {
                        text: '4.2. Poradnia nie ponosi odpowiedzialności za szkody wynikłe z niewłaściwego wykorzystania udzielonych porad lub zaniechania postępowania zgodnie z zaleceniami specjalistów.',
                    },
                    {
                        text: '5. Ochrona danych osobowych',
                    },
                    {
                        text: '5.1. Poradnia Psychologiczna HumanHealth.com przestrzega obowiązujących przepisów dotyczących ochrony danych osobowych. Szczegóły przetwarzania danych osobowych zawarte są w Polityce Prywatności.',
                    },
                    {
                        text: '6. Płatności',
                    },
                    {
                        text: '6.1. Wszelkie informacje dotyczące opłat za usługi znajdują się na stronie internetowej Poradni lub zostaną przekazane Klientowi przed umówioną wizytą.',
                    },
                    {
                        text: '6.2. Płatność za usługi może być dokonana gotówką, przelewem bankowym lub innymi dostępnymi środkami płatności.',
                    },
                    {
                        text: '7. Postanowienia końcowe',
                    },
                    {
                        text: '7.1. Poradnia Psychologiczna HumanHealth.com zastrzega sobie prawo do zmiany niniejszego regulaminu w dowolnym czasie. Zmiany te będą opublikowane na stronie internetowej Poradni i wchodzą w życie w momencie ich publikacji.',
                    },
                    {
                        text: '7.2. Każdy Klient zobowiązany jest do przestrzegania postanowień niniejszego regulaminu oraz zasad etyki i kultury podczas korzystania z usług Poradni.',
                    },
                    {
                        text: '7.3. W przypadku wszelkich sporów wynikających z korzystania z usług Poradni, strony będą dążyć do ich rozwiązania w sposób polubowny. W razie braku porozumienia, spory będą rozstrzygane przez właściwy sąd powszechny.',
                    },
                    {
                        text: '8. Kontakt',
                    },
                    {
                        text: 'W przypadku pytań, wątpliwości lub zgłoszeń, prosimy o kontakt z nami za pośrednictwem adresu e-mail: kontakt@humanhealth.com.',
                    },
                ]}
            />
        </WrapperWidth>
    );
};

export default Statue;
