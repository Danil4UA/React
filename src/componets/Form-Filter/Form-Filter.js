import Input from "../Form-Random/Input"
import Button from "../Form-Random/Button"

function FormFilter() {
    return (
        <form id="filter-form">
            <Input type="text" id="filter-author" placeholder="Enter the author you want to filter"></Input>
            <Button id="submit-filter" type="submit" text="Filter by Author"></Button>
        </form>
    )
}

export default FormFilter