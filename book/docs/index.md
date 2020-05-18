# Programming for Quantitative Economics

```{note}
This collection of lectures was built using [Jupyter
Book](https://beta.jupyterbook.org/intro.html), as part of the
[ExecutableBookProject](https://ebp.jupyterbook.org/en/latest/).  These tools
are still at an early stage of development and breaking changes may occur.
Feedback and participation is very welcome.
```

These notes present a set of lectures on Python programming for quantitative economics, designed and written by **[Thomas J. Sargent](http://www.tomsargent.com/)** and **[John Stachurski](https://johnstachurski.net/)**.

They are one part of a larger set of lectures on open source computing,
economics and finance backed by [QuantEcon](https://quantecon.org).


(troubleshooting)=

## Troubleshooting

```{note} This page is for readers experiencing errors when running the code from
the lectures.
```

The basic assumption of the lectures is that code in a lecture should
execute whenever

1.  it is executed in a Jupyter notebook and
2.  the notebook is running on a machine with the latest version of
    Anaconda Python.

To install Anaconda, follow the instructions in {ref}`this lecture <getting_started>`.

The most common source of problems for our
readers is that their Anaconda distribution is not up to date.

[Here\'s a useful article](https://www.anaconda.com/keeping-anaconda-date/) on how to
update Anaconda.

Another option is to simply remove Anaconda and reinstall.

You also need to keep the external code libraries, such as [QuantEcon.py](https://quantecon.org/quantecon-py) up to date.

For this task you can either

-   use `pip install --upgrade quantecon` on the command
    line, or
-   execute `!pip install --upgrade quantecon` within a
    Jupyter notebook.

## Feedback

To provide feedback on these lectures you can

- use our [discourse forum](https://discourse.quantecon.org/) or
- provide direct feedback to <contact@quantecon.org>.
