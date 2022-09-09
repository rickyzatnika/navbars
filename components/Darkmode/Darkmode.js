import styles from './Darkmode.module.css'
import { useTheme } from 'next-themes'
import { CgDarkMode } from 'react-icons/cg'
import { MdNightlightRound} from 'react-icons/md'

const Darkmode = () => {

    const { theme, setTheme } = useTheme();
  return (
    <>
        <button className={styles.Button} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <CgDarkMode size={24} /> : <MdNightlightRound size={24}/>}
        </button>
    </>
  )
}

export default Darkmode