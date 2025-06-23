# Steps to setup redux

# npm install @reduxjs/toolkit

# npm install react-redux

# Step 1

inside src, create a folder 'store' and a file 'store.js'

# Step 2
create yourSlice.js in the same store folder
# step 3
create reducers in yourSlice along with few more stuff  
import this reducer to store
# step 4  
import useDispact from redux package
use dispatch in button event click function or wherever



# Step 5
import store  and import Provider package wherever you need to place the provider (can use in starting point i.e main.tsx as well)
import {store} from './whatever/store/store.js'
import { Provider } from 'react-redux'  
then wrap em in <Provider store={store}><Provider/>
