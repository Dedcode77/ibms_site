# Enregistrez ce fichier comme setup-structure.sh
# Puis exécutez : bash setup-structure.sh

# Components
mkdir -p src/components/common/{Button,Card,Input,Modal,Loader,Badge}
mkdir -p src/components/layout/{Header,Footer,Container,Section}
mkdir -p src/components/home/{Hero,About,Stats,CTA,Partners}
mkdir -p src/components/formations/{FormationsList,FormationDetail,FormationCategories}
mkdir -p src/components/services/{ServicesList,ServiceDetail,Portfolio}
mkdir -p src/components/team/{TeamGrid,TeamHero}
mkdir -p src/components/contact/{ContactForm,ContactInfo,Map}
mkdir -p src/components/blog/{BlogList,BlogPost}

# Autres dossiers
mkdir -p src/{pages,hooks,context,services,utils,data,styles,routes}
mkdir -p src/assets/{icons,animations}
mkdir -p public/images/{team,partners,formations,services}
mkdir -p public/fonts

echo "✅ Structure créée avec succès!"

