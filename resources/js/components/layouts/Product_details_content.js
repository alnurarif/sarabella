import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Product_details_content extends Component{
	constructor(props){
		super(props)
	}
	render(){

		let features = (this.props.productFeatures === undefined) ? [] : JSON.parse(this.props.productFeatures)
		let colors = (this.props.productColors === undefined) ? [] : this.props.productColors
		let colorsToShow = colors.slice(0, 5)
		let moreToShow = colors.length - colorsToShow.length
		let product = (this.props.allState.product === undefined) ? {} : this.props.allState.product
		let product_unit_price = (product.unit_price === undefined || product.unit_price === null) ? 0 : parseFloat(product.unit_price).toFixed(2)
		let product_offer_value = (product.offer_price === undefined) ? 0 : parseFloat(product.offer_price).toFixed(2)
		let product_offer_type = (product.offer_price_type === undefined) ? '%' : product.offer_price_type
		let product_offer_price = 0
		let product_sell_price = 0
		let product_info_description = (product.product_info_description === undefined) ? '' : product.product_info_description
		let product_images = (product.images === undefined) ? [] : product.images
		let product_colors = (product.colors === undefined) ? [] : product.colors

		let selected_big_image = (product_images[this.props.allState.selected_product_image] === undefined) ? '' : product_images[this.props.allState.selected_product_image]

		
		let product_quantity = this.props.allState.product_quantity
		let liftPrice = this.props.methods.getLiftPrice()
		let rollPositionPrice = this.props.methods.getRollPositionPrice()
		let headRailsPrice = this.props.methods.getHeadRailsPrice()
		let bottomHemStylePrice = this.props.methods.getBottomHemStylePrice()
		
		let current_total_width_inch = this.props.methods.getTotalWidth()
		let current_total_height_inch = this.props.methods.getTotalHeight()

		let current_total_square_feet = parseFloat(current_total_width_inch)*parseFloat(current_total_height_inch)

		let per_square_feet_price = parseFloat(this.props.allState.per_square_feet_price_without_off).toFixed(8)

		let total_square_feet_price = (parseFloat(per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)


		let sell_price = total_square_feet_price
		// let sell_price = this.props.allState.product_sell_price
		
		let active_warrenty_price = this.props.allState.active_warrenty.warrenty_option_price
		let total_active_warrenty_price = parseFloat(active_warrenty_price) * parseFloat(product_quantity)
		sell_price = parseFloat(sell_price)+parseFloat(liftPrice)+parseFloat(rollPositionPrice)+parseFloat(headRailsPrice)+parseFloat(bottomHemStylePrice)
		let total_price = parseFloat(sell_price) * parseFloat(product_quantity)


		let offer_text = ''


		if(product_offer_type == '%'){
			product_offer_price = ((total_price * product_offer_value) / 100).toFixed(2)
			product_sell_price = parseFloat(total_price - ((total_price * product_offer_value) / 100)).toFixed(2)
			offer_text = product_offer_value + '%'		
		}else{
			product_offer_price = product_offer_value
			product_sell_price = parseFloat(total_price - product_offer_value).toFixed(2)
			offer_text = product_offer_type + product_offer_value
		}
		product_sell_price = parseFloat(product_sell_price) + parseFloat(total_active_warrenty_price)
		let warrenties = (product.warrenty_options === undefined) ? [] : product.warrenty_options 
		









		return (
			<div className="fix full bg_light_sky_blue">
			<div className="fix div_mid nine_by_ten border_box bg_white pt_10 pb_10 pl_10 pr_10 mt_10 mb_10">
				<p className="fs_12 text_sky_blue">>> Home >> Blinds Shades Shutters Draperies on Sale</p>
			</div>

			<div className="fix div_mid nine_by_ten border_box bg_white pt_10 pb_10 pl_10 pr_10 mt_10 mb_10">
				<div className="fix floatleft seven_by_ten">
					<div className="fix floatleft four_by_ten">
						<div className="fix div_mid ninty_five_percent">
							<div className="fix pt_5 pr_5 pb_5 pl_5 mb_10 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
								<img src={(selected_big_image != '') ? `${process.env.MIX_APP_URL}/uploads/products/${selected_big_image.image_name}` : `${process.env.MIX_APP_URL}/images/no_image.jpg`} className="full vertical_align_middle"/>
							</div>
							<div className="fix full bt_1 border_top_ash border_top_solid"></div>
							<div className="fix mt_10 w_max_content">
								{
									product_images.map( (product_image, index) => (
										<div key={index} className="fix w_50 h_50 floatleft pt_2 pr_2 pb_2 pl_2 border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash mr_5 cursor_pointer" onClick={() => this.props.methods.changeBigImageProductPhoto(index)}>
											<img src={`${process.env.MIX_APP_URL}/uploads/products/${product_image.image_name}`} className="full h_full"/>
										</div>	
									))
								}
							</div>
						</div>
					</div>
					<div className="fix floatleft six_by_ten">
						<div className="fix ninty_five_percent div_mid">
							<p className="fs_18 font_bold text_dark_ash lh_24">{product.name}</p>
							<div className="fix full mb_10">
								<div className="fix full">
									<p className="fs_12 text_yellow mt_10 display_inline_block">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
									</p>
									<p className="fs_12 text_dark_ash display_inline_block font_bold">4.8</p>
									<p className="fs_12 display_inline_block font_bold text_sky_blue">(590 reviews)</p>
									
								</div>
							</div>
							<div className="fix full bt_2 border_top_ash border_top_solid"></div>
							<div className="fix full pt_10 pb_10">
								<div className="fix floatleft half">
									<p className="fs_14 font_bold lh_30">Unit Price:</p>
								</div>
								<div className="fix floatleft half">
									<p className="fs_14 font_bold textright line_through lh_30">${total_price}</p>
								</div>
								<div className="fix floatleft half">
									<p className="fs_14 font_bold lh_30 text_red">You Save {offer_text}:</p>
								</div>
								<div className="fix floatleft half">
									<p className="fs_14 font_bold textright line_through lh_30 text_red">-${product_offer_price}</p>
								</div>
								<div className="fix floatleft half">
									<p className="fs_14 font_bold lh_30">Shipping:</p>
								</div>
								<div className="fix floatleft half">
									<p className="fs_14 font_bold textright lh_30">FREE</p>
								</div>
							</div>
							<div className="fix full bt_2 border_top_ash border_top_solid"></div>
							<div className="fix pt_10 pb_10">
								<div className="fix floatleft half">
									<p className="fs_14 font_bold lh_30 text_red">Sale Price: <i className="fas fa-question-circle"></i></p>
								</div>
								<div className="fix floatleft half">
									<p className="fs_14 font_bold textright lh_30 text_red">${product_sell_price}</p>
								</div>
								<div className="fix full mt_60">
									<Link to='/sample'><span className="bg_white text_orange fs_14 floatright lh_30 pr_16 pl_16 font_bold bt_1 br_1 bb_1 bl_1 border_solid border_orange cursor_pointer display_inline_block h_30 border_box">GET FREE SAMPLES</span></Link>
									<button className="bg_orange text_white fs_14 floatright lh_30 pr_16 pl_16 font_bold mr_10 bt_1 br_1 bb_1 bl_1 border_solid border_orange cursor_pointer h_30 border_box">CUSTOMIZE & BUY</button>
								</div>
							</div>
							<div className="fix full bt_2 border_top_ash border_top_solid"></div>
							<div className="fix pt_10 pb_10">
								<p className="fs_14 text_dark_ash lh_20 mb_20">{product_info_description.slice(0,200)} <span className="fs_14 font_bold lh_22 cursor_pointer" onClick={(e) => this.props.methods.goToProductDescription()}>More</span></p>

								<p className="fs_14 text_dark_ash lh_20">Delivery Timing: <a href="#" className="text_dark_ash">Click Here</a></p>
							</div>
						</div>
					</div>
					<div className="fix full pr_10 pl_10 border_box">
						<div className="fix full bg_sky_blue">
							<div className="fix half floatleft">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">1. Select Colour</p>
							</div>
							<div className="fix half floatright">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatright">
									<i className="fas fa-angle-down"></i>
									<i className="fas fa-angle-up"></i>
								</p>
							</div>
						</div>
					</div>
					<div className="fix full pr_10 pl_10 border_box mb_20">
						<div className="fix floatleft three_by_ten">
							<div className="fix ninty_five_percent pt_10 pr_10 pb_10 pl_10 border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash mt_10">
								<img src={(this.props.allState.selected_sample_image !== null) ? `${process.env.MIX_APP_URL}/uploads/products_colors/${this.props.allState.selected_sample_image}` : `${process.env.MIX_APP_URL}/images/no_color_md.jpg`} className="full"/>
								<div className="fix full">
									<div className="fix half floatleft">
										<div className="fix ninty_five_percent bt_1 br_1 bb_1 bl_1 border_solid border_ash pt_5 pr_5 pb_5 pl_5 border_box">
											<img src={(this.props.allState.selected_sample_color !== null) ? `${process.env.MIX_APP_URL}/uploads/colors/${this.props.allState.selected_sample_color}` : `${process.env.MIX_APP_URL}/images/no_color_md.jpg`} className="full vertical_align_middle"/>
										</div>
									</div>
									<div className="fix half floatleft">
										<p className="fs_10 font_bold lh_20">Selected Colour</p>
										<p className="fs_10 lh_20">{(this.props.allState.selected_sample_index != null) ? product_colors[this.props.allState.selected_sample_index].name : 'Need to Select'}</p>
										{
											(() => {
												if (product_colors[this.props.allState.selected_sample_index] !== undefined && product_colors[this.props.allState.selected_sample_index].pivot.has_free_sample != 0){
													if(this.props.methods.existInFreeSampleCart(product_colors[this.props.allState.selected_sample_index])){
														return <button className="fs_12 ninty_five_percent pt_5 pb_5 bg_grey text_white font_bold mt_5 border_none cursor_pointer">Added</button>
													}else{
														return <button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none cursor_pointer" onClick={(e) => this.props.methods.sampleAddToCart(product_color)}>Free Sample</button>
													}
												}

											})()
										}
									</div>
								</div>
							</div>
						</div>
						<div className="fix floatleft seven_by_ten pt_10">
							{
								product_colors.map( (product_color, index) => (
									<div className="fix floatleft sixteen_percent h_150 textcenter mb_10 cursor_pointer position_relative" key={index}>
										{this.props.allState.selected_sample_index == index && <img src={`${process.env.MIX_APP_URL}/images/tick.png`} className="t_0 r_0 position_absolute w_15 h_15"/>}
										<div className="fix div_mid ninty_five_percent h_120 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
											<img onClick={(e) => this.props.methods.showColorSample(index)} src={`${process.env.MIX_APP_URL}/uploads/colors/${product_color.image}`} className="full"/>
											<p className="fs_12 textcenter lh_20">{product_color.name}</p>
										</div>
										{
											(() => {
												if (product_color.pivot.has_free_sample!=0){
													if(this.props.methods.existInFreeSampleCart(product_color)){
														return <button className="fs_12 ninty_five_percent pt_5 pb_5 bg_grey text_white font_bold mt_5 border_none cursor_pointer">Added</button>
													}else{
														return <button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none cursor_pointer" onClick={(e) => this.props.methods.sampleAddToCart(product_color)}>Free Sample</button>
													}
												}

											})() 
											
										}
									</div>
								))
							}
							
						</div>
					</div>
					<div className="fix full bt_1 border_top_ash border_top_solid mb_20"></div>
					<div className="fix full pr_10 pl_10 border_box">
						<div className="fix full bg_sky_blue">
							<div className="fix half floatleft">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">2. Select Size, Mount Type & Quantity</p>
							</div>
							<div className="fix half floatright">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatright">
									<i className="fas fa-angle-down"></i>
									<i className="fas fa-angle-up"></i>
								</p>
							</div>
						</div>
					</div>
					
					<div className="fix full pr_10 pl_10 border_box mt_20 mb_20">
						<p className="fs_14 lh_24 text_dark_ash font_bold">Mount Type</p>
						<div className="fix full bt_1 border_top_ash border_top_solid mb_20"></div>
						<div className="fix full mb_20">
							{this.props.methods.showInsideMount()}
							{this.props.methods.showOutsideMount()}
							
						</div>

						<p className="fs_14 lh_24 text_dark_ash font_bold">Enter Mesurements</p>
						<div className="fix full bt_1 border_top_ash border_top_solid mb_20"></div>
						<div className="fix full mb_20">
							<div className="fix floatleft half">
								<div className="fix floatleft one_by_3">
									<div className="fix ninty_five_percent div_mid">
										<img src={`${process.env.MIX_APP_URL}/images/default_width.jpg`} className="full vertical_align_middle"/>
									</div>
								</div>
								<div className="fix floatleft one_by_3 pl_10">
									<p className="fs_14 text_dark_ash lh_20">Width (inches)</p>
									<div className="fix full">
										<div className="fix half floatleft">
											<div className="fix ninty_five_percent div_mid border_box">
												<select className="border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10" name="width_inch" onChange={(e) => this.props.methods.changeWidthHeightInch(e)} value={this.props.allState.width_inch}>
													<option value="12">12</option>
													<option value="13">13</option>
													<option value="14">14</option>
													<option value="15">15</option>
													<option value="16">16</option>
													<option value="17">17</option>
													<option value="18">18</option>
													<option value="19">19</option>
													<option value="20">20</option>
													<option value="21">21</option>
													<option value="22">22</option>
													<option value="23">23</option>
													<option value="24">24</option>
													<option value="25">25</option>
													<option value="26">26</option>
													<option value="27">27</option>
													<option value="28">28</option>
													<option value="29">29</option>
													<option value="30">30</option>
													<option value="31">31</option>
													<option value="32">32</option>
													<option value="33">33</option>
													<option value="34">34</option>
													<option value="35">35</option>
													<option value="36">36</option>
													<option value="37">37</option>
													<option value="38">38</option>
													<option value="39">39</option>
													<option value="40">40</option>
													<option value="41">41</option>
													<option value="42">42</option>
													<option value="43">43</option>
													<option value="44">44</option>
													<option value="45">45</option>
													<option value="46">46</option>
													<option value="47">47</option>
													<option value="48">48</option>
													<option value="49">49</option>
													<option value="50">50</option>
													<option value="51">51</option>
													<option value="52">52</option>
													<option value="53">53</option>
													<option value="54">54</option>
													<option value="55">55</option>
													<option value="56">56</option>
													<option value="57">57</option>
													<option value="58">58</option>
													<option value="59">59</option>
													<option value="60">60</option>
													<option value="61">61</option>
													<option value="62">62</option>
													<option value="63">63</option>
													<option value="64">64</option>
													<option value="65">65</option>
													<option value="66">66</option>
													<option value="67">67</option>
													<option value="68">68</option>
													<option value="69">69</option>
													<option value="70">70</option>
													<option value="71">71</option>
													<option value="72">72</option>
													<option value="73">73</option>
													<option value="74">74</option>
													<option value="75">75</option>
													<option value="76">76</option>
													<option value="77">77</option>
													<option value="78">78</option>
													<option value="79">79</option>
													<option value="80">80</option>
													<option value="81">81</option>
													<option value="82">82</option>
													<option value="83">83</option>
													<option value="84">84</option>
													<option value="85">85</option>
													<option value="86">86</option>
													<option value="87">87</option>
													<option value="88">88</option>
													<option value="89">89</option>
													<option value="90">90</option>
													<option value="91">91</option>
													<option value="92">92</option>
													<option value="93">93</option>
													<option value="94">94</option>
													<option value="95">95</option>
													<option value="96">96</option>
													<option value="97">97</option>
													<option value="98">98</option>
													<option value="99">99</option>
													<option value="100">100</option>
													<option value="101">101</option>
													<option value="102">102</option>
													<option value="103">103</option>
													<option value="104">104</option>
													<option value="105">105</option>
													<option value="106">106</option>
													<option value="107">107</option>
													<option value="108">108</option>
													<option value="109">109</option>
													<option value="110">110</option>
													<option value="111">111</option>
													<option value="112">112</option>
													<option value="113">113</option>
													<option value="114">114</option>
													<option value="115">115</option>
													<option value="116">116</option>
													<option value="117">117</option>
													<option value="118">118</option>
													<option value="119">119</option>
													<option value="120">120</option>
													<option value="121">121</option>
													<option value="122">122</option>
													<option value="123">123</option>
													<option value="124">124</option>
													<option value="125">125</option>
													<option value="126">126</option>
													<option value="127">127</option>
													<option value="128">128</option>
													<option value="129">129</option>
													<option value="130">130</option>
													<option value="131">131</option>
													<option value="132">132</option>
													<option value="133">133</option>
													<option value="134">134</option>
													<option value="135">135</option>
													<option value="136">136</option>
													<option value="137">137</option>
													<option value="138">138</option>
													<option value="139">139</option>
													<option value="140">140</option>
													<option value="141">141</option>
													<option value="142">142</option>
													<option value="143">143</option>
													<option value="144">144</option>
													<option value="145">145</option>
													<option value="146">146</option>
													<option value="147">147</option>
													<option value="148">148</option>
													<option value="149">149</option>
													<option value="150">150</option>
													<option value="151">151</option>
													<option value="152">152</option>
													<option value="153">153</option>
													<option value="154">154</option>
													<option value="155">155</option>
													<option value="156">156</option>
													<option value="157">157</option>
													<option value="158">158</option>
													<option value="159">159</option>
													<option value="160">160</option>
													<option value="161">161</option>
													<option value="162">162</option>
													<option value="163">163</option>
													<option value="164">164</option>
													<option value="165">165</option>
													<option value="166">166</option>
													<option value="167">167</option>
													<option value="168">168</option>
													<option value="169">169</option>
													<option value="170">170</option>
													<option value="171">171</option>
													<option value="172">172</option>
													<option value="173">173</option>
													<option value="174">174</option>
													<option value="175">175</option>
													<option value="176">176</option>
													<option value="177">177</option>
													<option value="178">178</option>
													<option value="179">179</option>
													<option value="180">180</option>
													<option value="181">181</option>
													<option value="182">182</option>
													<option value="183">183</option>
													<option value="184">184</option>
													<option value="185">185</option>
													<option value="186">186</option>
													<option value="187">187</option>
													<option value="188">188</option>
													<option value="189">189</option>
													<option value="190">190</option>
													<option value="191">191</option>
													<option value="192">192</option>
												</select>
											</div>
										</div>
										<div className="fix half floatleft">
											<div className="fix ninty_five_percent div_mid border_box">
												<select className="border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10" name="width_8ths" onChange={(e) => this.props.methods.changeWidthHeightInch(e)} value={this.props.allState.width_8ths}>
													<option value="0">0</option>
													<option value="0.125">1/8</option>
													<option value="0.25">1/4</option>
													<option value="0.375">3/8</option>
													<option value="0.5">1/2</option>
													<option value="0.625">5/8</option>
													<option value="0.75">3/4</option>
													<option value="0.875">7/8</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft half">
								<div className="fix floatleft one_by_3">
									<div className="fix ninty_five_percent div_mid">
										<img src={`${process.env.MIX_APP_URL}/images/default_height.jpg`} className="full vertical_align_middle"/>
									</div>
								</div>
								<div className="fix floatleft one_by_3 pl_10">
									<p className="fs_14 text_dark_ash lh_20">Height (inches)</p>
									<div className="fix full">
										<div className="fix half floatleft">
											<div className="fix ninty_five_percent div_mid">
												<select className="full border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 w_100 mr_10" name="height_inch" onChange={(e) => this.props.methods.changeWidthHeightInch(e)} value={this.props.allState.height_inch}>
													<option value="12">12</option>
													<option value="13">13</option>
													<option value="14">14</option>
													<option value="15">15</option>
													<option value="16">16</option>
													<option value="17">17</option>
													<option value="18">18</option>
													<option value="19">19</option>
													<option value="20">20</option>
													<option value="21">21</option>
													<option value="22">22</option>
													<option value="23">23</option>
													<option value="24">24</option>
													<option value="25">25</option>
													<option value="26">26</option>
													<option value="27">27</option>
													<option value="28">28</option>
													<option value="29">29</option>
													<option value="30">30</option>
													<option value="31">31</option>
													<option value="32">32</option>
													<option value="33">33</option>
													<option value="34">34</option>
													<option value="35">35</option>
													<option value="36">36</option>
													<option value="37">37</option>
													<option value="38">38</option>
													<option value="39">39</option>
													<option value="40">40</option>
													<option value="41">41</option>
													<option value="42">42</option>
													<option value="43">43</option>
													<option value="44">44</option>
													<option value="45">45</option>
													<option value="46">46</option>
													<option value="47">47</option>
													<option value="48">48</option>
													<option value="49">49</option>
													<option value="50">50</option>
													<option value="51">51</option>
													<option value="52">52</option>
													<option value="53">53</option>
													<option value="54">54</option>
													<option value="55">55</option>
													<option value="56">56</option>
													<option value="57">57</option>
													<option value="58">58</option>
													<option value="59">59</option>
													<option value="60">60</option>
													<option value="61">61</option>
													<option value="62">62</option>
													<option value="63">63</option>
													<option value="64">64</option>
													<option value="65">65</option>
													<option value="66">66</option>
													<option value="67">67</option>
													<option value="68">68</option>
													<option value="69">69</option>
													<option value="70">70</option>
													<option value="71">71</option>
													<option value="72">72</option>
													<option value="73">73</option>
													<option value="74">74</option>
													<option value="75">75</option>
													<option value="76">76</option>
													<option value="77">77</option>
													<option value="78">78</option>
													<option value="79">79</option>
													<option value="80">80</option>
													<option value="81">81</option>
													<option value="82">82</option>
													<option value="83">83</option>
													<option value="84">84</option>
													<option value="85">85</option>
													<option value="86">86</option>
													<option value="87">87</option>
													<option value="88">88</option>
													<option value="89">89</option>
													<option value="90">90</option>
													<option value="91">91</option>
													<option value="92">92</option>
													<option value="93">93</option>
													<option value="94">94</option>
													<option value="95">95</option>
													<option value="96">96</option>
													<option value="97">97</option>
													<option value="98">98</option>
													<option value="99">99</option>
													<option value="100">100</option>
													<option value="101">101</option>
													<option value="102">102</option>
													<option value="103">103</option>
													<option value="104">104</option>
													<option value="105">105</option>
													<option value="106">106</option>
													<option value="107">107</option>
													<option value="108">108</option>
													<option value="109">109</option>
													<option value="110">110</option>
													<option value="111">111</option>
													<option value="112">112</option>
													<option value="113">113</option>
													<option value="114">114</option>
													<option value="115">115</option>
													<option value="116">116</option>
													<option value="117">117</option>
													<option value="118">118</option>
													<option value="119">119</option>
													<option value="120">120</option>
													<option value="121">121</option>
													<option value="122">122</option>
													<option value="123">123</option>
													<option value="124">124</option>
													<option value="125">125</option>
													<option value="126">126</option>
													<option value="127">127</option>
													<option value="128">128</option>
													<option value="129">129</option>
													<option value="130">130</option>
													<option value="131">131</option>
													<option value="132">132</option>
													<option value="133">133</option>
													<option value="134">134</option>
													<option value="135">135</option>
													<option value="136">136</option>
													<option value="137">137</option>
													<option value="138">138</option>
													<option value="139">139</option>
													<option value="140">140</option>
													<option value="141">141</option>
													<option value="142">142</option>
													<option value="143">143</option>
													<option value="144">144</option>
													<option value="145">145</option>
													<option value="146">146</option>
													<option value="147">147</option>
													<option value="148">148</option>
													<option value="149">149</option>
													<option value="150">150</option>
													<option value="151">151</option>
													<option value="152">152</option>
													<option value="153">153</option>
													<option value="154">154</option>
													<option value="155">155</option>
													<option value="156">156</option>
													<option value="157">157</option>
													<option value="158">158</option>
													<option value="159">159</option>
													<option value="160">160</option>
													<option value="161">161</option>
													<option value="162">162</option>
													<option value="163">163</option>
													<option value="164">164</option>
													<option value="165">165</option>
													<option value="166">166</option>
													<option value="167">167</option>
													<option value="168">168</option>
													<option value="169">169</option>
													<option value="170">170</option>
													<option value="171">171</option>
													<option value="172">172</option>
													<option value="173">173</option>
													<option value="174">174</option>
													<option value="175">175</option>
													<option value="176">176</option>
													<option value="177">177</option>
													<option value="178">178</option>
													<option value="179">179</option>
													<option value="180">180</option>
													<option value="181">181</option>
													<option value="182">182</option>
													<option value="183">183</option>
													<option value="184">184</option>
													<option value="185">185</option>
													<option value="186">186</option>
													<option value="187">187</option>
													<option value="188">188</option>
													<option value="189">189</option>
													<option value="190">190</option>
													<option value="191">191</option>
													<option value="192">192</option>
												</select>
											</div>
										</div>
										<div className="fix half floatleft">
											<div className="fix ninty_five_percent div_mid">
												<select className="full border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 w_100 mr_10" name="height_8ths" onChange={(e) => this.props.methods.changeWidthHeightInch(e)} value={this.props.allState.height_8ths}>
													<option value="0">0</option>
													<option value="0.125">1/8</option>
													<option value="0.25">1/4</option>
													<option value="0.375">3/8</option>
													<option value="0.5">1/2</option>
													<option value="0.625">5/8</option>
													<option value="0.75">3/4</option>
													<option value="0.875">7/8</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


						<p className="fs_14 lh_24 text_dark_ash font_bold">Quantity</p>
						<div className="fix full bt_1 border_top_ash border_top_solid mb_20"></div>
						<div className="fix full mb_20">
							<div className="fix floatleft one_by_3 h_50 bg_very_light_ash pt_10 pb_10 pr_10 pl_10 border_box">
								<div className="fix floatleft half">
									<p className="fs_14 lh_30">Qty</p>
								</div>
								<div className="fix floatleft half">
									<input type="number" min="1" step="1" className="pl_5 pr_5 h_30 full bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box" name="product_quantity" onChange={(e) => this.props.methods.changeQuantity(e)} value={this.props.allState.product_quantity}/>
								</div>
							</div>
						</div>


						<p className="fs_14 lh_24 text_dark_ash font_bold">Room Name</p>
						<div className="fix full bt_1 border_top_ash border_top_solid mb_20"></div>
						<div className="fix full mb_20">
							<div className="fix floatleft one_by_3 h_50 bg_very_light_ash pt_10 pb_10 pr_10 pl_10 border_box">
								<div className="fix floatleft half">
									<p className="fs_14 lh_30">Room Name</p>
								</div>
								<div className="fix floatleft half">
									<input type="text" className="pl_5 pr_5 h_30 full bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box" placeholder="Enter room name" name="room_name" onChange={(e) => this.props.methods.changeInput(e)} value={this.props.allState.room_name}/>
								</div>
							</div>
						</div>
					</div>

					{this.props.methods.showFeatureSection()}

					<div className="fix full pr_10 pl_10 border_box">
						<div className="fix full bg_sky_blue">
							<div className="fix half floatleft">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">{(this.props.allState.product.has_features == 1) ? 4 : 3}. Select Warranty Options Details</p>
							</div>
							<div className="fix half floatright">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatright">
									<i className="fas fa-angle-down"></i>
									<i className="fas fa-angle-up"></i>
								</p>
							</div>
						</div>
					</div>
					<div className="fix full pr_10 pl_10 border_box mt_20 mb_20">
						<div className="fix floatleft two_by_ten pr_20 pl_20 border_box">
							<img src={`${process.env.MIX_APP_URL}/images/warranty_icon.png`} className="eighty_percent vertical_align_middle"/>
						</div>
						<div className="fix floatleft five_by_ten">
							{
								warrenties.map( (warrenty, index) => (
									<div className="fix full" key={index}>
										<div className="fix floatleft one_by_ten">
											<input type="radio" id="warranty_type" name="warranty_type" value="free" checked={this.props.allState.active_warrenty_index == index} className="vertical_align_middle" onChange={(e) => this.props.methods.setWarrenty(warrenty,index)}/>
										</div>
										<div className="fix floatleft six_by_ten">
											<p className="fs_14 lh_20 text_dark_ash">{warrenty.warrenty_option_detail}</p>
										</div>
										<div className="fix floatleft three_by_ten">
											<p className="fs_14 font_bold lh_20">{(warrenty.warrenty_option_price == 0) ? "FREE" : `$${warrenty.warrenty_option_price}`}</p>
										</div>
									</div>
								))
							}			
							
						</div>
					</div>


					<div className="fix full pr_10 pl_10 border_box mt_10" id="productDetailsInfo">
						<ul className="p_0">
							<li className="floatleft br_1 border_right_ash border_right_solid bb_1 border_bottom_ash border_bottom_solid bt_1 border_top_solid border_top_ash bl_1 border_left_solid border_left_ash bg_very_light_ash2 fs_14 font_bold text_sky_blue pr_16 pl_16 display_block lh_26 cursor_pointer" onClick={(e) => this.props.methods.changeTab('product_info')}>Product Info</li>
							<li className="floatleft br_1 border_right_ash border_right_solid bb_1 border_bottom_ash border_bottom_solid bt_1 border_top_solid border_top_ash fs_14 font_bold text_sky_blue pr_16 pl_16 display_block lh_26 cursor_pointer" onClick={(e) => this.props.methods.changeTab('reviews')}>Reviews</li>
							<li className="floatleft br_1 border_right_ash border_right_solid bb_1 border_bottom_ash border_bottom_solid bt_1 border_top_solid border_top_ash fs_14 font_bold text_sky_blue pr_16 pl_16 display_block lh_26 cursor_pointer" onClick={(e) => this.props.methods.changeTab('measure_and_install')}>Measure & Install</li>
							<li className="floatleft br_1 border_right_ash border_right_solid bb_1 border_bottom_ash border_bottom_solid bt_1 border_top_solid border_top_ash fs_14 font_bold text_sky_blue pr_16 pl_16 display_block lh_26 cursor_pointer" onClick={(e) => this.props.methods.changeTab('shipping_and_production')}>Shipping & Production</li>
						</ul>
					</div>
					<div className="fix full pt_0 pr_10 pb_10 pl_10 border_box">
						{this.props.methods.showTab()}
						
					</div>
				</div>
				<div className="fix floatleft three_by_ten">

					<div className="fix ninty_five_percent div_mid bg_very_light_ash mt_5 mb_5 pt_5 pb_5">
						<p className="fs_14 font_bold textcenter text_dark_ash">Related Products</p>
					</div>

					<div className="fix ninty_five_percent div_mid bg_very_light_ash">
						<div className="fix floatleft full mt_10 pb_10">
							<div className="fix div_mid eighty_five_percent textcenter pt_10 pr_10 pb_10 pl_10 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
								<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full"/>
								<p className="textleft fs_12 font_bold text_dark_ash lh_22 mb_10">HONEYCOMB/CELLULAR SHADES</p>
								
								<div className="fix full mt_5">
									<div className="fix floatleft eight_by_ten">
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
									</div>
									<div className="fix floatleft two_by_ten"><p className="fs_12 font_bold">20 <br/>more</p></div>
								</div>
								<p className="textleft fs_16 lh_22 font_bold"><span className="line_through">$293.98</span> <span className="text_error">$146.99*</span></p>
								<div className="fix full mt_5 textleft">
									<p className="text_dark_ash fs_14 font_bold">Free Shipping</p>
								</div>
							</div>
						</div>
						<div className="fix floatleft full mt_10 pb_10">
							<div className="fix div_mid eighty_five_percent textcenter pt_10 pr_10 pb_10 pl_10 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
								<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full"/>
								<p className="textleft fs_12 font_bold text_dark_ash lh_22 mb_10">HONEYCOMB/CELLULAR SHADES</p>
								
								<div className="fix full mt_5">
									<div className="fix floatleft eight_by_ten">
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
										<div className="fix floatleft h_30 two_by_ten">
											<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash"></div>
										</div>
									</div>
									<div className="fix floatleft two_by_ten"><p className="fs_12 font_bold">20 <br/>more</p></div>
								</div>
								<p className="textleft fs_16 lh_22 font_bold"><span className="line_through">$293.98</span> <span className="text_error">$146.99*</span></p>
								<div className="fix full mt_5 textleft">
									<p className="text_dark_ash fs_14 font_bold">Free Shipping</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div 
			className="fix 
			w_350 
			h_130 
			position_fixed 
			bottom_0 
			r_200 
			bg_very_light_sky 
			bt_1 
			bl_1 
			br_1 
			border_top_ash
			border_left_ash
			border_right_ash
			border_top_solid
			border_left_solid
			border_right_solid
			" 
			style={{'borderRadius' : '5px 5px 0px 0px'}}>
				<div className="fix half h_full floatleft border_box br_2 border_right_solid border_right_dark_ash">
					<div className="fix full h_half border_box bb_2 border_bottom_solid border_bottom_dark_ash pt_5 pr_5 pb_5 pl_5">
						<div className="fix full">
							<img src={`${process.env.MIX_APP_URL}/images/sample_icon.png`} className="floatleft pt_5 pb_5"/>
							<p className="lh_24 text_sky_blue fs_14 font_bold floatleft ml_10">My Sample Cart</p>
						</div>
						<p className="fs_14 lh_22 text_dark_ash textcenter">{this.props.allState.free_samples_in_cart.length} Items (FREE)</p>
					</div>
					<div className="fix full h_half border_box pt_5 pr_5 pb_5 pl_5">
						<p className="fs_14 lh_22 text_sky_blue textcenter display_none">View Product Summery</p>
					</div>
				</div>
				<div className="fix half floatleft border_box pt_5 pr_5 pb_5 pl_5">
					<p className="fs_14 lh_24 text_dark_ash textright">Your Price:</p>
					<p className="fs_16 lh_24 text_dark_ash textright text_error font_bold">{this.props.allState.total_price}</p>
					<div className="fix full p_10 border_box pt_10 pr_10 pb_10 pl_10 mt_16">
						{(this.props.allState.visible_add_to_cart == '0') ? <button className="border_box bg_grey text_white fs_14 floatright lh_30 font_bold bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash border_box full">ADD TO CART</button> : <button className="border_box bg_orange text_white fs_14 floatright lh_30 font_bold bt_1 br_1 bb_1 bl_1 border_solid border_orange cursor_pointer border_box full" onClick={(e) => this.props.methods.addProductToCart()}>ADD TO CART</button>}
					</div>
				</div>
			</div>

		</div>
		)
	}
}
export default Product_details_content