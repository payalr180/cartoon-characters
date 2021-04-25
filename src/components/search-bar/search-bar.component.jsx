export const SearchBar = ({ placeholder, handleChange}) => (
    <div className="search">
        <input type="search" placeholder={placeholder} onChange={handleChange}/>
    </div>
)