import styles from './Input.module.css'
export default function Input(props){
    return(
        <>
        <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} id={props.name} className={styles.inputBasic} required={props.required} value={props.value} min={props.min} max={props.max} name={props.name} onChange={props.onChange} onFocus={props.onFocus} placeholder={props.placehold} checked={props.checked} />
        </>
    )
}