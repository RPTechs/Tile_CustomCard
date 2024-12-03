
<img src="https://9040550.fs1.hubspotusercontent-na1.net/hubfs/9040550/__hs-marketplace__/RP%20Green%20Logo-3-1.png" alt="RevPartnersLogo" width="400"/>

# Custom Card Project

The Tile component displays a square tile that can contain other components. This custom card uses the Tile component to present grouped information such as first name, last name, and other relevant details. The information displayed on this custom card is for visibility purposes only and cannot be modified


## **Requirements**

To deploy and use this project, ensure the following are set up:

1. **HubSpot Account**: An active  Enterprise HubSpot account with developer project access.  
2. **HubSpot CLI**: Install the [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cli) and complete the setup.  
3. **Developer Projects**: Access to [HubSpot Developer Projects](https://app.hubspot.com/l/whats-new/betas) (currently in public beta under "CRM Development Tools"). 

---


## **Deployment Instructions**

### **Step 1: Clone the Repository**
Clone the project to your local environment:  

```console
git clone https://github.com/RPTechs/Tile_CustomCard.git
```

Navigate to the project folder:
```console
git cd customCard_Form
```
## **Step 2: Install Dependencies**
Ensure all required dependencies are installed by running:

```console
npm install
```
## **Step 3: Link Project to HubSpot**
Use the HubSpot CLI to link the project to your HubSpot account:

```console
hs init
```

## **Step 4: Create Project**
To create the project, use the following command:
```console
hs project create
```
Select the option:
```console
<Create an empty project ( no template)>
```
it isn't necessary to use any template.

## **Step 5: Upload Project**

```console
hs project upload
