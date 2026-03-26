# Producing Good PDFs from Jupyter Notebooks

*26.3.2026*

PDFs produced from Jupyter notebooks are known to have formatting issues. One solution to this problem is to throw out Jupyter notebooks out the window and start using an entirely different environment such as R Markdown. Luckily, there exists a better solution to the problem.  

Instead of downloading a PDF directly from the Jupyter notebook, the solution is to use a tool called **nbconvert**, which produces PDFs with no formatting issues (at least for me). The installation instructions for it can be found [here](https://nbconvert.readthedocs.io/en/latest/). In short, you need to install the **nbconvert** library itself, but also **pandoc** and **TeX** to produce PDFs with **nbconvert**.

Once **nbconvert** and all the other necessary libraries are installed, it is very straightforward to turn a Jupyter notebook into a PDF. We can do that with the following command:

```bash
jupyter nbconvert --to pdf notebook.ipynb
```

Here notebook.ipynb is the filename for the notebook we want to convert. There are other two commands that are sometimes useful. The first one of them hides all cells containing code including their outputs:

```bash
jupyter nbconvert --to pdf --TagRemovePreprocessor.remove_cell_tags='{"hide_code"}' notebook.ipynb
```

For this command to work, you need to add tags to the code cells you want to hide. Here I have used tag “hide_code”. Very similar to the previous command is the following command where we have replaced remove_cell_tags with remove_input_tags:

```bash
jupyter nbconvert --to pdf --TagRemovePreprocessor.remove_input_tags='{"hide_code"}' notebook.ipynb
```

What this command does is it hides only the outputs of the code cells, not the cells containing the actual code themselves. 
