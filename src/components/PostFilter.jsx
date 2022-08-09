import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter,setFilter}) => {
    return (
      <div>
        {/* <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
        
        <MySelect
          defaultValue={"Sort by"}
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          options={[
            { value: "title", name: "By title" },
            { value: "body", name: "By description" },
          ]}
        /> */}
      </div>
    );
};

export default PostFilter;