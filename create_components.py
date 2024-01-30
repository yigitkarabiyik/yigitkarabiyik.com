import os

src_path = './frontend/src'
components_names = [
        'about', 'contact', 'experience',
        'footer', 'header', 'nav', 'portfolio',
        'services', 'testimonials']
extensions = ['jsx', 'css']


def write_to_jsx(path, filename):
        line = ""
        line1 = "import React from 'react'"
        line2 = "import './{}.css'".format(filename)
        line3 = "const {} = () => ".format(filename.capitalize())+"{"
        line4 = "    return ("
        line5 = "        <div>{}</div>".format(filename.capitalize())
        line6 = "    )"
        line7 = "}"
        line8 = "export default {}".format(filename.capitalize())
        filepath = os.path.join(path, filename+'.jsx')
        f = open(filepath, 'w')
        f.write('{}\n{}\n{}\n{}\n{}\n{}\n{}\n{}\n{}\n{}\n{}\n'.format(
                line1,
                line2,
                line,
                line3,
                line4,
                line5,
                line6,
                line,
                line7,
                line,
                line8,
        ))
        f.close()
        print("'% s' rfce written" % filename)
def make_folder(parent_dir, foldername):
        path = os.path.join(parent_dir, foldername)
        os.makedirs(path, exist_ok=True)
        print("'% s' folder created" % foldername)
        return path
def create_css(path, filename):
        filepath = os.path.join(path, filename+'.css')
        f = open(filepath, 'w')
        f.close
        print("'% s' css created" % filename)

# ./frontend/src/components
components_directory = make_folder(src_path, 'components')
for name in components_names:
        # ./frontend/src/components/about
        component_path = make_folder(components_directory, name)
        write_to_jsx(component_path, name)
        create_css(component_path, name)

