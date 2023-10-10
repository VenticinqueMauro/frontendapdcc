import Image from 'next/image'
import country1 from '../../../public/countries_01.png'
import country2 from '../../../public/countries_02.png'
import country3 from '../../../public/countries_03.png'
import country4 from '../../../public/countries_04.png'
import country5 from '../../../public/countries_05.png'
import country6 from '../../../public/countries_06.png'
import country9 from '../../../public/countries_09.png'

const images = [
    country1,
    country2,
    country3,
    country4,
    country5,
    country6,
    country9,
    country3,
    country4,
    country5,
    country6,
    country9,
    country3,
    country4,
    country5,
    country6,
    country9,
]

export default function CountriesImages() {



    return (
            <marquee direction="left" scrollamount="5"  >
                <div className='flex items-center gap-2 '>
                    {
                        images.map(image => (
                            <Image  key={image} src={image} alt='countryImage' className='w-22 md:w-32'  />
                        ))
                    }
                </div>
            </marquee>
    )
}
