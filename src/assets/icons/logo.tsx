import React, { FC } from 'react';

type LogoProps = {
	lightMode: boolean;
};

const Logo: FC<LogoProps> = ({ lightMode }) => (
	<svg
		width="3em"
		height="60px"
		fill={lightMode ? 'rgb(21, 32, 43)' : '#777'}
		viewBox="0 -50 512 512"
	>
		<path
			d="M503.983,461.761h-12.04l-83.335-175.005c-1.33-2.792-4.146-4.57-7.237-4.57h-9.087v-77.495
    c0-75.147-61.136-136.284-136.284-136.284s-136.284,61.136-136.284,136.284v6.3L87.104,178.38
    c-1.716-1.716-2.662-3.998-2.662-6.425v-28.126c23.842-2.781,43.757-17.834,50.894-39.212c0.816-2.446,0.406-5.133-1.1-7.225
    c-1.507-2.092-3.927-3.331-6.504-3.331h-43.29V83.122c9.93-3.354,17.102-12.752,17.102-23.8c0-13.851-11.268-25.119-25.119-25.119
    S51.307,45.472,51.307,59.323c0,11.048,7.172,20.446,17.102,23.8v10.939h-43.29c-2.578,0-4.998,1.24-6.504,3.331
    c-1.506,2.092-1.915,4.779-1.1,7.225c7.137,21.378,27.053,36.431,50.894,39.212v28.126c0,6.709,2.612,13.018,7.357,17.762
    l43.95,43.949v48.521h-9.086c-3.092,0-5.909,1.779-7.237,4.57L20.057,461.761H8.017c-4.427,0-8.017,3.589-8.017,8.017
    s3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-4.406l13-27.298
    c0.011-0.004,0.021-0.006,0.031-0.011l104.102-42.169h65.131l-6.061,24.244c-0.6,2.394-0.061,4.932,1.458,6.878
    c1.519,1.946,3.85,3.083,6.319,3.083h68.409c2.469,0,4.799-1.137,6.319-3.083c1.52-1.945,2.058-4.483,1.458-6.878l-6.061-24.244
    h65.131l104.102,42.169c0.011,0.004,0.021,0.006,0.031,0.011l12.999,27.298h-4.405c-4.427,0-8.017,3.589-8.017,8.017
    s3.589,8.017,8.017,8.017h17.078c0.01,0,0.02,0.002,0.03,0.002c0.013,0,0.026-0.002,0.039-0.002h17.058
    c4.427,0,8.017-3.589,8.017-8.017S508.411,461.761,503.983,461.761z M67.34,59.323c0-5.01,4.076-9.086,9.086-9.086
    s9.086,4.076,9.086,9.086c0,5.01-4.076,9.086-9.086,9.086S67.34,64.332,67.34,59.323z M38.282,110.095h76.287
    c-8.272,11.073-22.572,18.171-38.143,18.171C60.854,128.266,46.555,121.168,38.282,110.095z M135.749,264.016h17.64
    c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017h-17.64v-43.29c0-25.63,8.066-49.41,21.784-68.944h124.122
    c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H170.997C192.773,97.933,222.841,84.442,256,84.442
    s63.227,13.492,85.003,35.273h-25.146c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h38.609
    c13.718,19.534,21.784,43.314,21.784,68.944v43.29H296.5c11.572-10.832,18.823-26.226,18.823-43.29
    c0-32.711-26.612-59.324-59.324-59.324s-59.324,26.612-59.324,59.324c0,17.064,7.251,32.458,18.823,43.29h-27.909
    c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h188.66v18.171H135.749V264.016z M256,247.982
    c-23.871,0-43.29-19.42-43.29-43.29c0-23.87,19.42-43.29,43.29-43.29s43.29,19.42,43.29,43.29
    C299.29,228.563,279.871,247.982,256,247.982z M61.02,413.032l54.672-114.812h5.917l22.17,81.288L61.02,413.032z M232.063,410.454
    l4.543-18.171h38.789l4.542,18.171H232.063z M352.49,376.249H159.51l-21.281-78.029h235.542L352.49,376.249z M368.221,379.509
    l22.17-81.288h5.917l54.672,114.812L368.221,379.509z"
		/>
	</svg>
);
export default Logo;