import { FilterLabel, FilterInput } from "./Filter.styled";
import { setFilter, getFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);    

    return <FilterLabel htmlFor="filter">Find contacts by name
    <FilterInput type='text' name="filter" onChange={e => dispatch(setFilter(e.target.value))} value={filter}/>
    </FilterLabel>
};


