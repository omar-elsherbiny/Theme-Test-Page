s='''
:root {
    --shadow-elevation-low:
        0.5px 0.6px 0.8px hsl(var(--shadow-color) / 0.15),
        0.8px 1px 1.3px -1.6px hsl(var(--shadow-color) / 0.13),
        2px 2.5px 3.2px -3.2px hsl(var(--shadow-color) / 0.1);
    --shadow-elevation-medium:
        0.5px 0.6px 0.8px hsl(var(--shadow-color) / 0.16),
        1.4px 1.8px 2.3px -1.1px hsl(var(--shadow-color) / 0.14),
        3.8px 4.9px 6.3px -2.2px hsl(var(--shadow-color) / 0.12),
        10px 12.7px 16.4px -3.2px hsl(var(--shadow-color) / 0.1);
    --shadow-elevation-high:
        0.5px 0.6px 0.8px hsl(var(--shadow-color) / 0.14),
        2.3px 2.9px 3.7px -0.5px hsl(var(--shadow-color) / 0.14),
        4.5px 5.7px 7.4px -0.9px hsl(var(--shadow-color) / 0.13),
        7.9px 10px 12.9px -1.4px hsl(var(--shadow-color) / 0.12),
        13.5px 17.1px 22.1px -1.9px hsl(var(--shadow-color) / 0.11),
        22.1px 28.1px 36.2px -2.3px hsl(var(--shadow-color) / 0.1),
        34.8px 44.1px 56.9px -2.8px hsl(var(--shadow-color) / 0.09),
        52.3px 66.3px 85.5px -3.2px hsl(var(--shadow-color) / 0.09);
    --font: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    --shadow-color: 0deg 0% 0%;
    /*Theme code: ${generateThemeCode()}*/
    --text-light: 207deg 70%;
    --text-dark: 207deg 70%;
    --background-light: 240deg 60%;
    --background-dark: 218deg 22%;
    --primary-light: 344deg 70%;
    --primary-dark: 344deg 75%;
    --secondary-light: 263deg 60%;
    --secondary-dark: 246deg 56%;
    --accent-light: 206deg 86%;
    --accent-dark: 190deg 65%;
    /*///////////////////*/
    --text-light-lit: 1;
    --text-dark-lit: 1;
    --background-light-lit: 1;
    --background-dark-lit: 1;
    --primary-light-lit: 1;
    --primary-dark-lit: 1;
    --secondary-light-lit: 1;
    --secondary-dark-lit: 1;
    --accent-light-lit: 1;
    --accent-dark-lit: 1;
    /*///////////////////*/
    --txt-50: var(--text-light) calc(95% * var(--text-light-lit));
    --txt-100: var(--text-light) calc(90% * var(--text-light-lit));
    --txt-200: var(--text-light) calc(80% * var(--text-light-lit));
    --txt-300: var(--text-light) calc(70% * var(--text-light-lit));
    --txt-400: var(--text-light) calc(60% * var(--text-light-lit));
    --txt-500: var(--text-light) calc(50% * var(--text-light-lit));
    --txt-600: var(--text-light) calc(40% * var(--text-light-lit));
    --txt-700: var(--text-light) calc(30% * var(--text-light-lit));
    --txt-800: var(--text-light) calc(20% * var(--text-light-lit));
    --txt-900: var(--text-light) calc(10% * var(--text-light-lit));
    --txt-950: var(--text-light) calc(5% * var(--text-light-lit));
    --txtd-50: var(--text-dark) calc(95% * var(--text-dark-lit));
    --txtd-100: var(--text-dark) calc(90% * var(--text-dark-lit));
    --txtd-200: var(--text-dark) calc(80% * var(--text-dark-lit));
    --txtd-300: var(--text-dark) calc(70% * var(--text-dark-lit));
    --txtd-400: var(--text-dark) calc(60% * var(--text-dark-lit));
    --txtd-500: var(--text-dark) calc(50% * var(--text-dark-lit));
    --txtd-600: var(--text-dark) calc(40% * var(--text-dark-lit));
    --txtd-700: var(--text-dark) calc(30% * var(--text-dark-lit));
    --txtd-800: var(--text-dark) calc(20% * var(--text-dark-lit));
    --txtd-900: var(--text-dark) calc(10% * var(--text-dark-lit));
    --txtd-950: var(--text-dark) calc(5% * var(--text-dark-lit));
    /*///////////////////*/
    --bgr-50: var(--background-light) calc(95% * var(--background-light-lit));
    --bgr-100: var(--background-light) calc(90% * var(--background-light-lit));
    --bgr-200: var(--background-light) calc(80% * var(--background-light-lit));
    --bgr-300: var(--background-light) calc(70% * var(--background-light-lit));
    --bgr-400: var(--background-light) calc(60% * var(--background-light-lit));
    --bgr-500: var(--background-light) calc(50% * var(--background-light-lit));
    --bgr-600: var(--background-light) calc(40% * var(--background-light-lit));
    --bgr-700: var(--background-light) calc(30% * var(--background-light-lit));
    --bgr-800: var(--background-light) calc(20% * var(--background-light-lit));
    --bgr-900: var(--background-light) calc(10% * var(--background-light-lit));
    --bgr-950: var(--background-light) calc(5% * var(--background-light-lit));  
    --bgrd-50: var(--background-dark) calc(95% * var(--background-dark-lit));
    --bgrd-100: var(--background-dark) calc(90% * var(--background-dark-lit));
    --bgrd-200: var(--background-dark) calc(80% * var(--background-dark-lit));
    --bgrd-300: var(--background-dark) calc(70% * var(--background-dark-lit));
    --bgrd-400: var(--background-dark) calc(60% * var(--background-dark-lit));
    --bgrd-500: var(--background-dark) calc(50% * var(--background-dark-lit));
    --bgrd-600: var(--background-dark) calc(40% * var(--background-dark-lit));
    --bgrd-700: var(--background-dark) calc(30% * var(--background-dark-lit));
    --bgrd-800: var(--background-dark) calc(20% * var(--background-dark-lit));
    --bgrd-900: var(--background-dark) calc(10% * var(--background-dark-lit));
    --bgrd-950: var(--background-dark) calc(5% * var(--background-dark-lit));
    /*///////////////////*/
    --prim-50: var(--primary-light) calc(95% * var(--primary-light-lit));
    --prim-100: var(--primary-light) calc(90% * var(--primary-light-lit));
    --prim-200: var(--primary-light) calc(80% * var(--primary-light-lit));
    --prim-300: var(--primary-light) calc(70% * var(--primary-light-lit));
    --prim-400: var(--primary-light) calc(60% * var(--primary-light-lit));
    --prim-500: var(--primary-light) calc(50% * var(--primary-light-lit));
    --prim-600: var(--primary-light) calc(40% * var(--primary-light-lit));
    --prim-700: var(--primary-light) calc(30% * var(--primary-light-lit));
    --prim-800: var(--primary-light) calc(20% * var(--primary-light-lit));
    --prim-900: var(--primary-light) calc(10% * var(--primary-light-lit));
    --prim-950: var(--primary-light) calc(5% * var(--primary-light-lit));
    --primd-50: var(--primary-dark) calc(95% * var(--primary-dark-lit));
    --primd-100: var(--primary-dark) calc(90% * var(--primary-dark-lit));
    --primd-200: var(--primary-dark) calc(80% * var(--primary-dark-lit));
    --primd-300: var(--primary-dark) calc(70% * var(--primary-dark-lit));
    --primd-400: var(--primary-dark) calc(60% * var(--primary-dark-lit));
    --primd-500: var(--primary-dark) calc(50% * var(--primary-dark-lit));
    --primd-600: var(--primary-dark) calc(40% * var(--primary-dark-lit));
    --primd-700: var(--primary-dark) calc(30% * var(--primary-dark-lit));
    --primd-800: var(--primary-dark) calc(20% * var(--primary-dark-lit));
    --primd-900: var(--primary-dark) calc(10% * var(--primary-dark-lit));
    --primd-950: var(--primary-dark) calc(5% * var(--primary-dark-lit));
    /*///////////////////*/
    --scnd-50: var(--secondary-light) calc(95% * var(--secondary-light-lit));
    --scnd-100: var(--secondary-light) calc(90% * var(--secondary-light-lit));
    --scnd-200: var(--secondary-light) calc(80% * var(--secondary-light-lit));
    --scnd-300: var(--secondary-light) calc(70% * var(--secondary-light-lit));
    --scnd-400: var(--secondary-light) calc(60% * var(--secondary-light-lit));
    --scnd-500: var(--secondary-light) calc(50% * var(--secondary-light-lit));
    --scnd-600: var(--secondary-light) calc(40% * var(--secondary-light-lit));
    --scnd-700: var(--secondary-light) calc(30% * var(--secondary-light-lit));
    --scnd-800: var(--secondary-light) calc(20% * var(--secondary-light-lit));
    --scnd-900: var(--secondary-light) calc(10% * var(--secondary-light-lit));
    --scnd-950: var(--secondary-light) calc(5% * var(--secondary-light-lit));
    --scndd-50: var(--secondary-dark) calc(95% * var(--secondary-dark-lit));
    --scndd-100: var(--secondary-dark) calc(90% * var(--secondary-dark-lit));
    --scndd-200: var(--secondary-dark) calc(80% * var(--secondary-dark-lit));
    --scndd-300: var(--secondary-dark) calc(70% * var(--secondary-dark-lit));
    --scndd-400: var(--secondary-dark) calc(60% * var(--secondary-dark-lit));
    --scndd-500: var(--secondary-dark) calc(50% * var(--secondary-dark-lit));
    --scndd-600: var(--secondary-dark) calc(40% * var(--secondary-dark-lit));
    --scndd-700: var(--secondary-dark) calc(30% * var(--secondary-dark-lit));
    --scndd-800: var(--secondary-dark) calc(20% * var(--secondary-dark-lit));
    --scndd-900: var(--secondary-dark) calc(10% * var(--secondary-dark-lit));
    --scndd-950: var(--secondary-dark) calc(5% * var(--secondary-dark-lit));
    /*///////////////////*/
    --acnt-50: var(--accent-light) calc(95% * var(--accent-light-lit));
    --acnt-100: var(--accent-light) calc(90% * var(--accent-light-lit));
    --acnt-200: var(--accent-light) calc(80% * var(--accent-light-lit));
    --acnt-300: var(--accent-light) calc(70% * var(--accent-light-lit));
    --acnt-400: var(--accent-light) calc(60% * var(--accent-light-lit));
    --acnt-500: var(--accent-light) calc(50% * var(--accent-light-lit));
    --acnt-600: var(--accent-light) calc(40% * var(--accent-light-lit));
    --acnt-700: var(--accent-light) calc(30% * var(--accent-light-lit));
    --acnt-800: var(--accent-light) calc(20% * var(--accent-light-lit));
    --acnt-900: var(--accent-light) calc(10% * var(--accent-light-lit));
    --acnt-950: var(--accent-light) calc(5% * var(--accent-light-lit));
    --acntd-50: var(--accent-dark) calc(95% * var(--accent-dark-lit));
    --acntd-100: var(--accent-dark) calc(90% * var(--accent-dark-lit));
    --acntd-200: var(--accent-dark) calc(80% * var(--accent-dark-lit));
    --acntd-300: var(--accent-dark) calc(70% * var(--accent-dark-lit));
    --acntd-400: var(--accent-dark) calc(60% * var(--accent-dark-lit));
    --acntd-500: var(--accent-dark) calc(50% * var(--accent-dark-lit));
    --acntd-600: var(--accent-dark) calc(40% * var(--accent-dark-lit));
    --acntd-700: var(--accent-dark) calc(30% * var(--accent-dark-lit));
    --acntd-800: var(--accent-dark) calc(20% * var(--accent-dark-lit));
    --acntd-900: var(--accent-dark) calc(10% * var(--accent-dark-lit));
    --acntd-950: var(--accent-dark) calc(5% * var(--accent-dark-lit));
}
'''

# s = s.split('\n')
# for i in range(len(s)):
#     var = s[i].split('--')
#     if len(var)>1:
#         var = var[1].split(':')[0]
#         span = '<span onmouseleave="resaturate()"onmouseenter="desaturate(\''+var+'\')">--'+var+'</span>'
#         s[i] = s[i].replace('--'+var,span)
#     s[i] = '<pre>'+str(i).ljust(3)+' '+s[i]+'</pre>'
# s="\n".join(s)
# print(s)
s = s.split('\n')
for i in range(len(s)):
    s[i] = '<pre>'+str(i).ljust(3)+' '+s[i]+'</pre>'
s="\n".join(s)
print(s)