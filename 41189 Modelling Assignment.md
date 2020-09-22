---
jupyter:
  jupytext:
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.2'
      jupytext_version: 1.6.0
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---

<!-- #region toc-hr-collapsed=false -->
 **41189 Modelling Assignment — Group 6**
 
 Topic: Measuring both the spread of Covid-19 and society’s response to preventative measures to the pandemic
 
 Group members:
 
 - Jordan Boulous
 - Alex Rebello
 - Cameron Solomon
 - Raymond Lam
 
<!-- #endregion -->

<!-- #region toc-hr-collapsed=false -->
# Introduction
<!-- #endregion -->

## State the problem, why it is important/relevant to you and/or more broadly to society













<!-- #region toc-hr-collapsed=false -->
# Context, background information, justification
<!-- #endregion -->

## Research and review literature, news, digital media, drivers and how the problem is being addressed by academia, industry, government, etc.


![Rich Picture](Figures/richPicture.png)








## Identify the system + stakeholders. For this, you will need to construct a “rich picture” that captures the essential elements.














## Identify current models or prevailing frames that are being used to address the problem














## Discuss how prevailing models/frames are preventing the problem from being fully addressed or solved













<!-- #region toc-hr-collapsed=false -->
# Conceptual Models
<!-- #endregion -->

## Based on your self-study of the supermarket of models, explain the three models that you have chosen to look at the problem

















## Explain how each of the three models works (brief) and how it will be applied in your case.


#### Agent Based Model:
Agent based models are used to simulate the interactions between different agents, which may include individuals in a society, in order to monitor and analyse the behaviours of each autonomous agent based on their relations with other agents, also ensuring to comprehend their influence on the surrounding environment.
Using the agent based model, we can establish the rates of infection and recovery according to the selected solutions. Agent-based models can be used to predict outcomes for an array of different scenarios in the Covid-19 predicament, providing reliable calculated estimates of the deaths, recoveries and infections for different preventative measures. With the application of this model, we are able to track the virus’ impact on individual agents, with constant updates occurring in order to provide a reliable model with relevant data based to assist with the tracking of infection and recovery in the Covid-19 global crisis. This can accentuate the success or failure of different preventative measures since the simulations can be compared to determine the most and least effective methods to diminish the impact of the virus.



#### Schelling’s Segregation Model:
Schelling’s segregation model is used to simulate the way in which individuals naturally segregate based on their personally selected threshold of similarity in the agents surrounding them.
With the Schelling’s segregation model, we are able to witness the behaviours of different individuals in society during the Covid-19 pandemic, measuring their happiness and comfortability in regards to their neighbours’ willingness to accept vaccines. Hence, we are able to witness the effects of emotional segregation in different communities according to different ‘similarity rates’, which are the percentage of people surrounding individuals that they wish to be vaccinated in order to be satisfied. This is useful in regards to the possible solutions to the Covid-19 pandemic since it can be used to predict the contentment of individuals in a society after a vaccine is released, providing insight into the amount of vaccinations that need to be produced in order to create a general sense of comfort.



#### Riot Model (Granovetter Threshold Theory):
Riot models, when taking into consideration the Granovetter threshold theory, are utilised in order to measure an individual’s willingness to make a decision based on the decisions made by people around them. Each individual has their own personal threshold, which when exceeded will result in them making a certain decision, mimicking the behaviours of those around them.
Through the use of riot models, with a specific focus on the Granovetter threshold theory, it has been made evident that we can effectively measure the threshold for different individuals to participate in accepting the vaccine and thus ‘joining the riot’. This is necessary information as it allows us to be able to recognise the number of willing participants based on the different thresholds in a society. Hence, this data can be utilised to predict the amount of vaccines that must be produced, and can also be used to predict the amount of people with specific thresholds required in order to flatten the curve representing the growth of Covid-19.  



## Describe any data sources (real or hypothetical) that are needed to construct the three models. Use illustrative drawings and diagrams where possible

<!-- #region -->
#### Agent Based Model:
Agent based models take into consideration the number of degrees for each individual agent. This is necessary, as the degrees, or the connections, allow the model to measure the amount of interactions that each infected model may have. Also, the individual recovery rate is considered in the agent based model, with the average of 14 days being applied to agents after they have been recognised as infected. 

- Covid agent based model without lockdown being implemented as a preventative measure:
![](attachment:AgentBasedModel1.JPG)

This model is simulating the spread of covid-19 in a group of 100,000 agents over 100 days, assuming that 100 people are initially infected. These individuals are said to have an average of 20 connections, with a 1.4% chance of spreading the virus to those agents. Also, the recovery rate is approximately 14 days after an individual is infected.


- Covid agent based model with lockdown being implemented after 15 days of the virus being present in society:
![](attachment:AgentBasedModel2.JPG)
This model keeps all the same characteristics as the prior model, except after 15 days lockdown was forced upon society, which is said to reduce interactions by 90% and will last 85 days.


Covid-19 Demonstration Model. (2020). Retrieved 22 September 2020, from http://covidagentmodel.com/
<!-- #endregion -->

<!-- #region -->
#### Schelling’s Segregation Model:
Using the segregation model provided by NetLogo, we are able to input our own similarity rate to measure the behaviours of individuals when they require X% of individuals around them to have been vaccinated in order to be satisfied.
- Segregation Model with 0% similarity rate (0% of neighbours must be vaccinated)
![](attachment:Segregation1.JPG)
Individuals are not at all segregated


- Segregation Model with 25% similarity rate (25% of neighbours must be vaccinated)
![](attachment:Segregation2.JPG)
Individuals are still fairly mixed with non-similar agents, but slightly segregated


- Segregation Model with 50% similarity rate (50% of neighbours must be vaccinated)
![](attachment:Segregation3.JPG)
Individuals are heavily, but not entirely, segregated


- Segregation Model with 75% similarity rate (75% of neighbours must be vaccinated
![](attachment:Segregation4.JPG)
Individuals are almost entirely segregated.

Wilensky, U. (1997). NetLogo Segregation model. http://ccl.northwestern.edu/netlogo/models/Segregation. Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL.

<!-- #endregion -->

#### Riot Model (Granovetter Threshold Theory):
In order to use the riot model effectively, we must estimate the thresholds of individuals in a society. Assuming that the ‘riot’ action is accepting a vaccination as a preventative measure to Covid-19, then there are different hypothetical scenarios which could occur:
- If a sample of 100 individuals is taken and the lowest threshold of an individual T(i) = 1, then nobody will take the vaccine. 
- In order to correct this, there must be an individual with T(i) = 0, which is likely for desperate individuals or individuals with a strong incentive to take the vaccine. Hence, for each individual with T(i) = 0, the number of people rioting R(t) will increase by 1. 
- Then, for each other individual, the following formula, T(i) >= R(t) is applied. If true, then they will accept the vaccine and R(t) will increase. 
- Eventually, either everyone will accept the vaccine, or those with extremely high thresholds will never accept the vaccine.


<!-- #region toc-hr-collapsed=false -->
# Implementation
<!-- #endregion -->

## Describe the mathematical and/or statistical implementation of your three models. This should be done using Python code.

```python

```

```python

```

```python

```

<!-- #region toc-hr-collapsed=false -->
# Scenario analysis, sensitivity + uncertainty evaluation
<!-- #endregion -->

## Establish baseline parameter sets and or configuration for output scenarios

```python

```

```python

```

```python

```

## Perform a basic sensitivity analysis, i.e., identify with parameters are most sensitive/insensitive for the outputs

```python

```

```python

```

```python

```

<!-- #region toc-hr-collapsed=false -->
# Proposed solutions
<!-- #endregion -->

## Discuss potential portfolio of solutions based on your previous analysis


```python

```

```python

```

```python

```

<!-- #region toc-hr-collapsed=false -->
# Reflection on group + individual approach to assignment
<!-- #endregion -->

## Each student should discuss their experiences about working on the project. The document should be no more than 1000 words per group member. It should discuss following key aspects:

- Your contribution in the project
- Other group members’ contributions
- What positives do you take from this project? What did you learn from this project?
- What challenges did you face in this project and how you overcame those?
- If you are faced with dealing with a real-world problem and need to do some modelling, how would you determine which modelling approach to take. Justify your response.


### Group member 1 reflection

```python

```

### Group member 2 reflection

```python

```

### Group member 3 reflection

```python

```

### Group member 4 reflection

```python

```
