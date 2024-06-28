
import Input from "./Input.js"
import Button  from "./Button.js"

function Form() {

    return (
        <form id="form-add">
            <Input type="text" id="add-quote" placeholder="Enter the quote"/>
            <Input type="text" id="add-author" placeholder="Enter the author"/>
            <Button id="submit-random" type="submit" text="Submit"></Button>
        </form>
    )
}

export default Form