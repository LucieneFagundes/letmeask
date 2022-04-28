type ButtonProps = {
    text?: string;
    children?: string;
} 

export function Button(props: ButtonProps){
    return <div>
        <button>{props.children || 'Default'}</button>
    </div>
}