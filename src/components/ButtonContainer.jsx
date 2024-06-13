import styles from './ButtonContainer.module.css';
const ButtonContainer = () =>{
  const buttonName = ['C','1','2','+','3','4','5','-','6','7','8','*','9','/','.','='];
   return(
   <div className={styles.buttonContainer}>
    {buttonName.map(buttonName => <button className={styles.button}>{buttonName}</button>)}
   
   
  </div>);
}

export default ButtonContainer;