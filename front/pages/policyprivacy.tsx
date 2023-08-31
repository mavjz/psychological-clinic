import Article from 'components/sections/Article';
import WrapperWidth from 'components/wrappers/WrapperWidth';
import React from 'react';

const PolicyPrivacy = () => {
    return (
        <WrapperWidth>
            <Article
                headline="Polityka Prywatności Poradni Psychologicznej HumanHealth.com"
                texts={[
                    {
                        text: '1. Wprowadzenie',
                    },
                    {
                        text: 'Poradnia Psychologiczna HumanHealth.com zobowiązuje się do ochrony prywatności swoich Klientów oraz użytkowników witryny internetowej. Niniejsza Polityka Prywatności opisuje, w jaki sposób gromadzamy, przetwarzamy i chronimy dane osobowe. Prosimy o dokładne zapoznanie się z treścią tego dokumentu.',
                    },
                    {
                        text: '2. Gromadzenie Danych Osobowych',
                    },
                    {
                        text: '2.1. Dane Udostępnione Przez Użytkowników: Podczas korzystania z naszej witryny, mogą Państwo być proszeni o podanie swoich danych osobowych, takich jak imię, nazwisko, adres e-mail, numer telefonu itp. Dane te są gromadzone wyłącznie w celu świadczenia usług psychologicznych oraz komunikacji z Klientem.',
                    },
                    {
                        text: '2.2. Dane Automatycznie Gromadzone: Nasza witryna może automatycznie zbierać pewne dane, takie jak adres IP, rodzaj przeglądarki, dostawcę usług internetowych, strony odwiedzone na naszej witrynie, czas spędzony na stronach itp. Te informacje są wykorzystywane w celach analitycznych i doskonalenia naszych usług.',
                    },
                    {
                        text: '3. Przetwarzanie Danych Osobowych',
                    },
                    {
                        text: '3.1. Cele Przetwarzania: Dane osobowe są przetwarzane w celu umożliwienia świadczenia usług psychologicznych, komunikacji z Klientem, zarządzania kontem użytkownika oraz w celach statystycznych i analitycznych.',
                    },
                    {
                        text: '3.2. Podmioty Trzecie: Nie udostępniamy danych osobowych stronom trzecim bez wyraźnej zgody Klienta, chyba że jest to niezbędne do świadczenia usług (np. podczas umawiania wizyty u psychologa). W takich przypadkach zapewniamy, że podmiot trzeci przestrzega odpowiednich standardów ochrony danych.',
                    },
                    {
                        text: '4. Bezpieczeństwo Danych',
                    },
                    {
                        text: '4.1. Zabezpieczenia Techniczne: Wdrażamy odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe przed dostępem nieautoryzowanym, utratą lub nieuprawnionym ujawnieniem',
                    },
                    {
                        text: '4.2. Uprawnienia Dostępu: Dostęp do danych osobowych ma jedynie ograniczona grupa osób upoważnionych, które są zobowiązane do zachowania poufności.',
                    },
                    {
                        text: '5. Prawa Użytkowników',
                    },
                    {
                        text: '5.1. Prawo Do Wglądu: Użytkownicy mają prawo do uzyskania informacji o przetwarzaniu swoich danych osobowych oraz do wglądu w te dane.',
                    },
                    {
                        text: '5.2. Prawo Do Poprawiania Danych: Użytkownicy mają prawo do poprawiania swoich danych osobowych w przypadku, gdy są one nieprawidłowe lub niekompletne.',
                    },
                    {
                        text: '5.3. Prawo Do Usunięcia: Użytkownicy mają prawo do usunięcia swoich danych osobowych w określonych sytuacjach, na przykład gdy dane nie są już potrzebne do celów przetwarzania.',
                    },
                    {
                        text: '6. Zgoda',
                    },
                    {
                        text: 'Korzystając z usług Poradni Psychologicznej HumanHealth.com oraz odwiedzając naszą witrynę, użytkownik wyraża zgodę na przetwarzanie swoich danych osobowych zgodnie z niniejszą Polityką Prywatności.',
                    },
                    {
                        text: '7. Kontakt',
                    },
                    {
                        text: 'W przypadku pytań lub wątpliwości dotyczących naszej Polityki Prywatności, prosimy o kontakt na adres e-mail: kontakt@humanhealth.com.                        ',
                    },
                    {
                        text: 'Niniejsza Polityka Prywatności obowiązuje od daty publikacji i może być okresowo aktualizowana. Prosimy o regularne sprawdzanie treści tej polityki w celu pozostania zaznajomionym z jej postanowieniami. Ostatnia aktualizacja: 14.08.2023.',
                    },
                ]}
            />
        </WrapperWidth>
    );
};

export default PolicyPrivacy;
