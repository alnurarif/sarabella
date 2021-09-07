import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

/** Here all are the section of public/customer */
import Order_confirmed from './pages/Order_confirmed'
import Product_details from './pages/Product_details'
import Checkout from './pages/Checkout'
import Custom_page from './pages/Custom_page'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Sample from './pages/Sample'
import Filter from './pages/Filter'
import About from './pages/About'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Blog from './pages/Blog'

/** Here all are the section of admin */
/*Product pages*/
import View_products from './pages/manage/products/View_products'
import Edit_product from './pages/manage/products/Edit_product'
import Add_product from './pages/manage/products/Add_product'

/*Page pages*/
import View_pages from './pages/manage/pages/View_pages'
import Edit_page from './pages/manage/pages/Edit_page'
import Add_page from './pages/manage/pages/Add_page'

/*Section pages*/
import View_sections from './pages/manage/sections/View_sections'
import Edit_section from './pages/manage/sections/Edit_section'
import Add_section from './pages/manage/sections/Add_section'

/*Category pages*/
import View_categories from './pages/manage/categories/View_categories'
import Edit_category from './pages/manage/categories/Edit_category'
import Add_category from './pages/manage/categories/Add_category'

/*Sub Category pages*/
import View_sub_categories from './pages/manage/sub_categories/View_sub_categories'
import Edit_sub_category from './pages/manage/sub_categories/Edit_sub_category'
import Add_sub_category from './pages/manage/sub_categories/Add_sub_category'


/*Color pages*/
import View_colors from './pages/manage/colors/View_colors'
import Edit_color from './pages/manage/colors/Edit_color'
import Add_color from './pages/manage/colors/Add_color'

class App extends Component{
    state = {
        common : {
            PUBLIC_URL : ''
        }
        
    }
    render(){
        return (

            <Router>
                <div>
                    <Switch>
                        <Route exact path='/manage/products/edit_product/:id' component={Edit_product} />
                        <Route exact path='/manage/products/view_products' component={View_products} />
                        <Route exact path='/manage/products/add_product' component={Add_product} />

                        <Route exact path='/manage/pages/edit_page/:id' component={Edit_page} />
                        <Route exact path='/manage/pages/view_pages' component={View_pages} />
                        <Route exact path='/manage/pages/add_page' component={Add_page} />

                        <Route exact path='/manage/sections/edit_section/:id' component={Edit_section} />
                        <Route exact path='/manage/sections/view_sections' component={View_sections} />
                        <Route exact path='/manage/sections/add_section' component={Add_section} />

                        <Route exact path='/manage/categories/edit_category/:id' component={Edit_category} />
                        <Route exact path='/manage/categories/view_categories' component={View_categories} />
                        <Route exact path='/manage/categories/add_category' component={Add_category} />

                        <Route exact path='/manage/sub_categories/edit_sub_category/:id' component={Edit_sub_category} />
                        <Route exact path='/manage/sub_categories/view_sub_categories' component={View_sub_categories} />
                        <Route exact path='/manage/sub_categories/add_sub_category' component={Add_sub_category} />
                            
                        
                        <Route exact path='/manage/colors/edit_color/:id' component={Edit_color} />
                        <Route exact path='/manage/colors/view_colors' component={View_colors} />
                        <Route exact path='/manage/colors/add_color' component={Add_color} />
                            
                        
                        <Route exact path='/public/category/:slug'
                            render={(props) => (
                            <Filter key={props.match.params.slug} {...props} />)
                            }
                        />
                        <Route exact path='/public/product/:id' 
                            render={(props) => (
                            <Product_details key={props.match.params.id} {...props} />)
                            }
                        />
                        <Route exact path='/public/c_page/:slug' 
                            render={(props) => (
                            <Custom_page key={props.match.params.slug} {...props} />)
                            }
                        />

                        <Route exact path='/product_details' component={Product_details} />
                        <Route exact path='/order_confirmed' component={Order_confirmed} />
                        <Route exact path='/checkout' component={Checkout} />
                        <Route exact path='/gallery' component={Gallery} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/filter' component={Filter} />
                        <Route exact path='/sample' component={Sample} />
                        <Route exact path='/cart' component={Cart} />
                        <Route exact path='/blog' component={Blog} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/' component={Home} />
                        
                    </Switch>
                </div>
            </Router>
        )

    }
}

export default App;

if (document.getElementById('app')) {
    
    ReactDOM.render(<App />, document.getElementById('app'));
}
    