import Link from "next/link"
import { Separator } from "@/components/ui/separator"


const dataFooter = [
    {id:1, name: 'Sobre nosotros', path: '/about'},
    {id:2, name: 'Productos', path: '/products'},
    {id:3, name: 'Cuentas', path: '/account'},
    {id:4, name: 'Privacidad', path: '/privacidad'},
]

const Footer = ()=> {
  return (
    <footer className=" mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:item-center sm:justify-between">
                <p className="flex justify-center mb-4 sm:mb-0 sm:flex-none">
                    <span className="font-bold">BambamDev</span>
                    E-Commerce
                </p>
                <ul className="flex justify-center flex-wrap items-center text-sm mb-6 sm:mb-0 font-medium text-gray-500 dark:text-gray-300">
                    {
                        dataFooter.map((item)=>(
                            <li key={item.id}>
                                <Link href={item.path} className="hover:underline me-4 md:me-6">
                                {item.name}
                                </Link>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block gap-1 text-sm text-gray-500 text-center dark:text-gray-400">
                &copy; 2025 <Link href='/'>Bambam Dev.</Link> Todos los derechos reservados
            </span>

        </div>
    </footer>
  )
}

export default Footer;