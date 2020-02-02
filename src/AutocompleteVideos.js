import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import axios from "axios";

const AutocompleteVideos = () => {
  const [searched, setSearched] = useState(false);
  const res = axios
    .get("http://5e369354f7e55d0014ad5215.mockapi.io/list")
    .then(function(response) {
      console.log(response);
    });
  console.log(res);
  // const videoInList = videosList.map(element => element.id);
  // const list = videos.filter(obj => !videoInList.includes(obj.id));

  // let options = list.map(video => {
  //     return {
  //         id: video.id,
  //         name: video.name,
  //         thumbnail: video.thumbnail,
  //         player_url: video.player_url
  //     }
  // });

  // const onInputChange = useCallback(debounce((e,value) => handleChangeSearch(value), 1000) , []);

  // let timer = null;
  // const setFindStr = () => {
  //     if (timer) {
  //         clearTimeout(timer);
  //     }
  //     timer = setTimeout(onInputChange, 1000);
  // };

  // const changeAutocomplete = (e, value) => {
  //     handleChange(value);
  //     setSearched(false);
  //     setDisableDelete(true);
  //     onInputChange()
  // };

  // useEffect(() => {
  //     setFindStr();
  //     return () => clearTimeout(timer);
  // }, [videoInList]);

  return (
    <Fragment>
      <Box>
        <Autocomplete
          id="videos-list"
          // options={options}
          // getOptionLabel={option => option.name}
          // onInputChange={onInputChange}
          // onChange={changeAutocomplete}
          // disableClearable={true}
          // loading={loading}
          renderInput={params => {
            if (!searched) {
              params.inputProps.value = "";
            }
            return (
              <TextField
                {...params}
                label="Search videos"
                variant="outlined"
                placeholder="Favorites"
                fullWidth
                onChange={() => setSearched(true)}
                InputProps={{
                  ...params.InputProps
                  // endAdornment: (
                  //     <React.Fragment>
                  //         {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  //         {params.InputProps.endAdornment}
                  //     </React.Fragment>
                  // ),
                }}
              />
            );
          }}
        />
      </Box>
      <List>
        {/* {videosList && videosList.map((list, index) => (
                    <TodoList list={list} key={index} deleteItem={deleteItem} />
                ))} */}
      </List>
    </Fragment>
  );
};

export default AutocompleteVideos;
