# Local-DateTime-AllState
This system is made for all state local date time according to zones using the JavaScript Date API.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Git Issues][issues-img]][issues-url]
  [![Closed Issues][closed-issues-img]][closed-issues-url]
  <img src="docs/assets/no-dependencies.svg" alt="no dependencies">
  [![Code Quality: Javascript][lgtm-badge]][lgtm-badge-url]
  [![Total alerts][lgtm-alerts]][lgtm-alerts-url]
  [![Caretaker][caretaker-image]][caretaker-url]
  [![Sponsoring][sponsor-badge]][sponsor-url]
  [![MIT license][license-img]][license-url]

#### Install it via npm:

```shell
npm i local-datetime-allstate
```

#### Require the Module:
```shell
const AllStateTimeDate = require('local-datetime-allstate')
```

##### To use
```shell
AllStateTimeDate('Europe/Paris');
```
##### To get all zone in one call
```shell
AllStateTimeDate('all'); // "version": "^1.1.0"
```


##### Examples

```shell
const outputObject = AllStateTimeDate(); // no region input, default Asia/Dhaka
{
  TimeZone: 'Asia/Dhaka',
  TodayTime: '2:42:54 AM',
  TodayDate: '2022-02-01',
  TodayDay: 3,
  onlyDate: 2,
  TodayDayString: 'Wednesday',
  onlyYear: 2022,
  onlyHour: 2,
  onlyMinutes: 42,
  onlyMonth: 1,
  onlyMonthString: 'February',
  getTimezoneOffset: -360,
  toDateString: 'Wed Feb 02 2022',
  TodayTimeString: 1643748174,
  nextDate: '2022-02-02'
}
```

```shell
const outputObject = AllStateTimeDate('America/Mexico_City); 
{
  TimeZone: 'America/Mexico_City',
  TodayTime: '2:44:59 PM',
  TodayDate: '2022-02-01',
  TodayDay: 2,
  onlyDate: 1,
  TodayDayString: 'Tuesday',
  onlyYear: 2022,
  onlyHour: 14,
  onlyMinutes: 44,
  onlyMonth: 1,
  onlyMonthString: 'February',
  getTimezoneOffset: -360,
  toDateString: 'Tue Feb 01 2022',
  TodayTimeString: 1643705099,
  nextDate: '2022-02-02'
}
```


## Parameters 

### ( you can only use below region )

```
## Available Time Zones
Pacific/Midway
Pacific/Niue
Pacific/Pago_Pago
Pacific/Honolulu
Pacific/Johnston
Pacific/Rarotonga
Pacific/Tahiti
America/Anchorage
America/Juneau
America/Nome
America/Sitka
America/Yakutat
America/Santa_Isabel
America/Dawson
America/Los_Angeles
America/Tijuana
America/Vancouver
America/Whitehorse
America/Creston
America/Dawson_Creek
America/Hermosillo
America/Phoenix
America/Chihuahua
America/Mazatlan
America/Boise
America/Cambridge_Bay
America/Denver
America/Edmonton
America/Inuvik
America/Ojinaga
America/Yellowknife
America/Belize
America/Costa_Rica
America/El_Salvador
America/Guatemala
America/Managua
America/Tegucigalpa
Pacific/Galapagos
America/Chicago
America/Indiana/Knox
America/Indiana/Tell_City
America/Matamoros
America/Menominee
America/North_Dakota/Beulah
America/North_Dakota/Center
America/North_Dakota/New_Salem
America/Rainy_River
America/Rankin_Inlet
America/Resolute
America/Winnipeg
America/Bahia_Banderas
America/Cancun
America/Merida
America/Mexico_City
America/Monterrey
America/Regina
America/Swift_Current
America/Bogota
America/Cayman
America/Coral_Harbour
America/Eirunepe
America/Guayaquil
America/Jamaica
America/Lima
America/Panama
America/Rio_Branco
America/Detroit
America/Havana
America/Indiana/Petersburg
America/Indiana/Vincennes
America/Indiana/Winamac
America/Iqaluit
America/Kentucky/Monticello
America/Louisville
America/Montreal
America/Nassau
America/New_York
America/Nipigon
America/Pangnirtung
America/Port-au-Prince
America/Thunder_Bay
America/Toronto
America/Indiana/Marengo
America/Indiana/Vevay
America/Indianapolis
America/Caracas
America/Asuncion
America/Glace_Bay
America/Goose_Bay
America/Halifax
America/Moncton
America/Thule
Atlantic/Bermuda
America/Campo_Grande
America/Cuiaba
America/Anguilla
America/Antigua
America/Aruba
America/Barbados
America/Blanc-Sablon
America/Boa_Vista
America/Curacao
America/Dominica
America/Grand_Turk
America/Grenada
America/Guadeloupe
America/Guyana
America/Kralendijk
America/La_Paz
America/Lower_Princes
America/Manaus
America/Marigot
America/Martinique
America/Montserrat
America/Port_of_Spain
America/Porto_Velho
America/Puerto_Rico
America/Santo_Domingo
America/St_Barthelemy
America/St_Kitts
America/St_Lucia
America/St_Thomas
America/St_Vincent
America/Tortola
America/Santiago
Antarctica/Palmer
America/St_Johns
America/Sao_Paulo
America/Argentina/La_Rioja
America/Argentina/Rio_Gallegos
America/Argentina/Salta
America/Argentina/San_Juan
America/Argentina/San_Luis
America/Argentina/Tucuman
America/Argentina/Ushuaia
America/Buenos_Aires
America/Catamarca
America/Cordoba
America/Jujuy
America/Mendoza
America/Araguaina
America/Belem
America/Cayenne
America/Fortaleza
America/Maceio
America/Paramaribo
America/Recife
America/Santarem
Antarctica/Rothera
Atlantic/Stanley
America/Godthab
America/Montevideo
America/Bahia
America/Noronha
Atlantic/South_Georgia
America/Scoresbysund
Atlantic/Azores
Atlantic/Cape_Verde
Africa/Casablanca
Africa/El_Aaiun
America/Danmarkshavn
Atlantic/Canary
Atlantic/Faeroe
Atlantic/Madeira
Europe/Dublin
Europe/Guernsey
Europe/Isle_of_Man
Europe/Jersey
Europe/Lisbon
Europe/London
Africa/Abidjan
Africa/Accra
Africa/Bamako
Africa/Banjul
Africa/Bissau
Africa/Conakry
Africa/Dakar
Africa/Freetown
Africa/Lome
Africa/Monrovia
Africa/Nouakchott
Africa/Ouagadougou
Africa/Sao_Tome
Atlantic/Reykjavik
Atlantic/St_Helena
Arctic/Longyearbyen
Europe/Amsterdam
Europe/Andorra
Europe/Berlin
Europe/Busingen
Europe/Gibraltar
Europe/Luxembourg
Europe/Malta
Europe/Monaco
Europe/Oslo
Europe/Rome
Europe/San_Marino
Europe/Stockholm
Europe/Vaduz
Europe/Vatican
Europe/Vienna
Europe/Zurich
Europe/Belgrade
Europe/Bratislava
Europe/Budapest
Europe/Ljubljana
Europe/Podgorica
Europe/Prague
Europe/Tirane
Africa/Ceuta
Europe/Brussels
Europe/Copenhagen
Europe/Madrid
Europe/Paris
Europe/Sarajevo
Europe/Skopje
Europe/Warsaw
Europe/Zagreb
Africa/Algiers
Africa/Bangui
Africa/Brazzaville
Africa/Douala
Africa/Kinshasa
Africa/Lagos
Africa/Libreville
Africa/Luanda
Africa/Malabo
Africa/Ndjamena
Africa/Niamey
Africa/Porto-Novo
Africa/Tunis
Africa/Windhoek
Asia/Nicosia
Europe/Athens
Europe/Bucharest
Europe/Chisinau
Asia/Beirut
Africa/Cairo
Asia/Damascus
Asia/Nicosia
Europe/Athens
Europe/Bucharest
Europe/Chisinau
Europe/Helsinki
Europe/Kiev
Europe/Mariehamn
Europe/Nicosia
Europe/Riga
Europe/Sofia
Europe/Tallinn
Europe/Uzhgorod
Europe/Vilnius
Europe/Zaporozhye
Africa/Blantyre
Africa/Bujumbura
Africa/Gaborone
Africa/Harare
Africa/Johannesburg
Africa/Kigali
Africa/Lubumbashi
Africa/Lusaka
Africa/Maputo
Africa/Maseru
Africa/Mbabane
Europe/Helsinki
Europe/Kiev
Europe/Mariehamn
Europe/Riga
Europe/Sofia
Europe/Tallinn
Europe/Uzhgorod
Europe/Vilnius
Europe/Zaporozhye
Europe/Istanbul
Asia/Jerusalem
Africa/Tripoli
Asia/Amman
Asia/Baghdad
Europe/Kaliningrad
Europe/Minsk
Asia/Aden
Asia/Bahrain
Asia/Kuwait
Asia/Qatar
Asia/Riyadh
Africa/Addis_Ababa
Africa/Asmera
Africa/Dar_es_Salaam
Africa/Djibouti
Africa/Juba
Africa/Kampala
Africa/Khartoum
Africa/Mogadishu
Africa/Nairobi
Antarctica/Syowa
Indian/Antananarivo
Indian/Comoro
Indian/Mayotte
Europe/Kirov
Europe/Moscow
Europe/Simferopol
Europe/Volgograd
Europe/Astrakhan
Europe/Samara
Europe/Ulyanovsk
Asia/Tehran
Asia/Dubai
Asia/Muscat
Asia/Baku
Indian/Mahe
Indian/Mauritius
Indian/Reunion
Asia/Tbilisi
Asia/Yerevan
Asia/Kabul
Antarctica/Mawson
Asia/Aqtau
Asia/Aqtobe
Asia/Ashgabat
Asia/Dushanbe
Asia/Oral
Asia/Samarkand
Asia/Tashkent
Indian/Kerguelen
Indian/Maldives
Asia/Karachi
Asia/Kolkata
Asia/Colombo
Asia/Katmandu
Antarctica/Vostok
Asia/Almaty
Asia/Bishkek
Asia/Qyzylorda
Asia/Urumqi
Indian/Chagos
Asia/Dhaka
Asia/Thimphu
Asia/Yekaterinburg
Asia/Rangoon
Indian/Cocos
Antarctica/Davis
Asia/Bangkok
Asia/Hovd
Asia/Jakarta
Asia/Phnom_Penh
Asia/Pontianak
Asia/Saigon
Asia/Vientiane
Indian/Christmas
Asia/Novokuznetsk
Asia/Novosibirsk
Asia/Omsk
Asia/Hong_Kong
Asia/Macau
Asia/Shanghai
Asia/Krasnoyarsk
Asia/Brunei
Asia/Kuala_Lumpur
Asia/Kuching
Asia/Makassar
Asia/Manila
Asia/Singapore
Antarctica/Casey
Australia/Perth
Asia/Taipei
Asia/Choibalsan
Asia/Ulaanbaatar
Asia/Irkutsk
Asia/Dili
Asia/Jayapura
Asia/Tokyo
Pacific/Palau
Asia/Pyongyang
Asia/Seoul
Australia/Adelaide
Australia/Broken_Hill
Australia/Darwin
Australia/Brisbane
Australia/Lindeman
Australia/Melbourne
Australia/Sydney
Antarctica/DumontDUrville
Pacific/Guam
Pacific/Port_Moresby
Pacific/Saipan
Pacific/Truk
Australia/Currie
Australia/Hobart
Asia/Chita
Asia/Khandyga
Asia/Yakutsk
Antarctica/Macquarie
Pacific/Efate
Pacific/Guadalcanal
Pacific/Kosrae
Pacific/Noumea
Pacific/Ponape
Asia/Sakhalin
Asia/Ust-Nera
Asia/Vladivostok
Antarctica/McMurdo
Pacific/Auckland
Pacific/Funafuti
Pacific/Kwajalein
Pacific/Majuro
Pacific/Nauru
Pacific/Tarawa
Pacific/Wake
Pacific/Wallis
Pacific/Fiji
Asia/Anadyr
Asia/Kamchatka
Asia/Magadan
Asia/Srednekolymsk
Asia/Kamchatka
Pacific/Enderbury
Pacific/Fakaofo
Pacific/Tongatapu
Pacific/Apia
```

## License
The MIT License (MIT)

Copyright (c)2022 arifkhan-silicornya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.