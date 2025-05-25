import { HiSearch } from "react-icons/hi";

function SearchBox() {
    return (
        <>
            <div className="searchBox position-relative d-flex align-items-center">
                <HiSearch className="me-2 curser" />
                <input type="text" placeholder="Search here..."></input>
            </div>
        </>
    )
}
export default SearchBox;